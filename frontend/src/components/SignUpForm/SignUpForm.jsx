import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import styles from "./SignUpForm.module.css"

import FormRow from "../AuthFormComponents/FormRow/FormRow.jsx"
import FormButton from "../AuthFormComponents/FormButton/FormButton.jsx"
import Input from "../Input/Input";
import Loading from "../Loading/Loading";

import errorHandler from "../../helpers/errorHandler.js"

import useSignUp from "../../hooks/useSignUp.js"


function SignUpForm() {
    const navigate = useNavigate();
    const { success, signUp, isLoading, error } = useSignUp();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, 
            [name]: value,
        })
    }

    const handleFormButtonClick = async (e) => {
        e.preventDefault();
        await signUp(formData);
    }

    useEffect(() => {
        if(!error) { return; }
        errorHandler.handleError(error, () => { 
            setFormData({
                ...formData, 
                password: "",
                confirmPassword: ""
            })
        })
    }, [error])

    useEffect(() => {
        if(!success) { return; }
        return navigate("/login", { err: false, message: "user created successfully" });
    }, [success]);

    if (isLoading) {
        return(
            <Loading />
        )
    }

    return(
        <form className={styles.container}>
            <FormRow>
                <Input 
                    type="text"
                    value={formData.firstname} 
                    handleChange={handleChange} 
                    name="firstname" 
                    placeholder="Djaoued" 
                    label="first name"
                />
                <Input 
                    type="text"
                    value={formData.lastname} 
                    handleChange={handleChange} 
                    name="lastname" 
                    placeholder="Bouhadda" 
                    label="last name"
                />   
            </FormRow>
            <FormRow>
                <Input 
                    type="text"
                    value={formData.username} 
                    handleChange={handleChange} 
                    name="username" 
                    placeholder="djocoding" 
                    label="username"
                />
                <Input 
                    type="email"
                    value={formData.email} 
                    handleChange={handleChange} 
                    name="email" 
                    placeholder="djocoding@gmail.com"
                    label="email"
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
                <Input
                    type="password" 
                    value={formData.confirmPassword}
                    handleChange={handleChange}
                    name="confirmPassword"
                    label="confirm password"
                />
            </FormRow>
            <FormButton handleFormButtonClick={handleFormButtonClick} value="sign up" />
        </form>
    )
}


export default SignUpForm;