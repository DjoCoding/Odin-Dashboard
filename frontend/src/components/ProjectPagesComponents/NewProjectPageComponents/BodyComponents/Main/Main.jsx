import { useEffect, useState } from "react";
import useProjectCreator from "../../../../../hooks/useProjectCreator";
import toast from "react-hot-toast";

import styles from "./Main.module.css"

import NamesTaker from "../../../CommonComponents/NamesTaker/NamesTaker";
import PrivacyTaker from "../../../CommonComponents/PrivacyTaker/PrivacyTaker";
import Footer from "../../../CommonComponents/Footer/Footer";
import Loading from "../../../../Loading/Loading";

import errorHandler from "../../../../../helpers/errorHandler";
import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();
    const [details, setDetails] = useState({ name: "", description: "" });
    const [buttonChecked, setButtonChecked] = useState(null);
    const { success, createNewProject, isLoading, error } = useProjectCreator();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...details, 
            [name]: value
        })
    }

    const handleClick = async (e) => {
        e.preventDefault();
        if(!buttonChecked) { return toast.error("select the privacy level of the project"); }

        const data = { ...details, ispublic: buttonChecked === "public" };
        await createNewProject(data);
        
        return navigate("/", { state: { err: false, message: "project created successfully" } });
    }

    useEffect(() => {
        if(!error) { return; }
        errorHandler.handleError(error);
    }, [error]);

    if(!success && isLoading) {
        return(
            <Loading />
        )
    }

    return(
        <form className={styles.container}>
            <NamesTaker details={details} handleChange={handleChange} />
            <PrivacyTaker buttonChecked={buttonChecked} setButtonChecked={setButtonChecked}/>
            <Footer buttonChecked={buttonChecked} handleClick={handleClick} />
        </form>
    )
}

export default Main;