import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


import styles from "./CreateNewProjectPage.module.css"
import NavBar from "../../components/ProjectPagesComponents/CommonComponents/NavBar/NavBar";
import Body from "../../components/ProjectPagesComponents/NewProjectPageComponents/Body/Body";

function CreateNewProjectPage() {
    const navigate = useNavigate();
    const { auth } = useAuth();

    useEffect(() => {
        if(!auth.user) { navigate("/"); return; }
    }, []);

    return(
        <div className={styles.container}>
            <NavBar />
            <Body />
        </div>
    )
}

export default CreateNewProjectPage;