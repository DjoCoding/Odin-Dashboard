import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import styles from "./Main.module.css"

import NamesTaker from "../../../CommonComponents/NamesTaker/NamesTaker";
import Footer from "../../../CommonComponents/Footer/Footer";
import PrivacyTaker from "../../../CommonComponents/PrivacyTaker/PrivacyTaker";
import Loading from "../../../../Loading/Loading";

import errorHandler from "../../../../../helpers/errorHandler.js";

import useProjectFetcher from "../../../../../hooks/useProjectFetcher.js"
import useProjectEditor from "../../../../../hooks/useProjectEditor.js"

import useAuth from "../../../../../hooks/useAuth.js";
import useUserFetcher from "../../../../../hooks/useUserFetcher.js";

function Main({ projectID }) {
    const [details, setDetails] = useState({
        name: "",
        description: ""
    });
    const [buttonChecked, setButtonChecked] = useState("private");
    
    const { isfound, fetchUser, isLoading: userfetcherLoading, error: userFetcherError } = useUserFetcher();
    const { success, editProject, error: editorError, isLoading: editorLoading } = useProjectEditor();
    const { project, fetchProject, error: projectFetcherError, isLoading: projectFetcherLoading } = useProjectFetcher();

    const { auth } = useAuth();

    useEffect(() => {
        fetchUser();
    }, [])

    useEffect(() => {
        if(!auth) { return; }
        if(auth.user) { 
            fetchProject(auth.user.id, projectID);
        }
    }, [auth]);

    useEffect(() => {
        if(!project) { return; }
        setDetails({ name: project.name, description: project.description });
        setButtonChecked("public");
    }, [project]);

    useEffect(() => {
        if(!editorError) { return; }
        errorHandler.handleError(editorError, () => {
            setDetails({
                name: project.name, 
                description: project.description
            })
        });
    }, [editorError]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...details, 
            [name]: value
        })
    }

    const handleClick = async (e) => {
        e.preventDefault();
        await editProject(projectID, { ...details, ispublic: buttonChecked === "private" });
    }

    if(userFetcherError) {
        return <Navigate to="/" />
    }    

    if(projectFetcherError) { 
        errorHandler.handleError();
        return <Navigate to="/" state={{ err: true, message: "failed to load the project" }}/>
    }

    if(editorLoading || userfetcherLoading || projectFetcherLoading) { 
        return(
            <Loading />
        )
    }

    if(success) { 
        return <Navigate to="/" state={{ err: false, message: "project edited successfully" } } />
    }

    return(
        <form className={styles.container}>
            <NamesTaker details={details} handleChange={handleChange} />
            <PrivacyTaker buttonChecked={buttonChecked} setButtonChecked={setButtonChecked}/>
            <Footer handleClick={handleClick} />
        </form>
    )
}

export default Main;