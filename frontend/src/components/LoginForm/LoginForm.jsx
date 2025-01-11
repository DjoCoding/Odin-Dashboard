import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import styles from "./LoginForm.module.css"

import Loading from "../Loading/Loading"
import Input from "../Input/Input";
import FormRow from "../AuthFormComponents/FormRow/FormRow.jsx"
import FormButton from "../AuthFormComponents/FormButton/FormButton.jsx";

import errorHandler from "../../helpers/errorHandler.js";

import useLogin from "../../hooks/useLogin.js";

function LoginForm() {
    const navigate = useNavigate();
    const { isfound, login, isLoading, error } = useLogin();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, 
            [name]: value
        })
    }

    const handleFormButtonClick = async (e) => {
        e.preventDefault();
        await login(formData);
    }

    useEffect(() => {
        if(!error) { return; }
        errorHandler.handleError(error, () => { 
            setFormData({
                username: formData.username,
                password: ""
            });
        })
    }, [error]);

    useEffect(() => {
        if(!isfound) { return; }
        return navigate("/");
    }, [isfound]);


    if(isLoading) {
        return(
            <Loading />
        )
    }

    return(
        <form className={styles.container}>
            <FormRow>
                <Input 
                    type="text"
                    value={formData.username} 
                    handleChange={handleChange} 
                    name="username" 
                    placeholder="djocoding"     
                    label="username"
                />
            </FormRow>
            <FormRow>
                <Input
                    type="password" 
                    value={formData.password}
                    handleChange={handleChange}
                    name="password"
                    label="password"
                />
            </FormRow>
            <FormButton handleFormButtonClick={handleFormButtonClick} value="log in"/>
        </form>
    )
}


export default LoginForm;