import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

import styles from "./LoginPage.module.css"

import Projector from "../../components/Projector/Projector";
import FormSection from "../../components/FormSection/FormSection"


function LoginPage() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state && location.state.message) {
            const { err, message } = location.state;
            err ? toast.error(message) : toast.success(message);
        }
        navigate(location.pathname, { replace: true });
    }, [location.state]);


    return(
        <div className={styles.container}>
            <Projector isLogin={true} />
            <FormSection isLogin={true} />
        </div> 
    )
}

export default LoginPage;