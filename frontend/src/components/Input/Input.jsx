import styles from "./Input.module.css"

import TextInput from "../InputComponents/TextInput/TextInput"
import PasswordInput from "../InputComponents/PasswordInput/PasswordInput"

function Input({ type, label, name, placeholder, value, handleChange }) {    
    return(
        <div className={styles.container}>
            <label htmlFor={name}>
                { label }
            </label>
            { 
                type === "password" 
                &&
                <PasswordInput value={value} handleChange={handleChange} name={name} />
            }
            {
                type !== "password"
                && 
                <TextInput value={value} handleChange={handleChange} name={name} type={type} placeholder={placeholder} />
            }
        </div>
    )
}

export default Input;