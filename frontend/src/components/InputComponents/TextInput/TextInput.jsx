import styles from "./TextInput.module.css"

function TextInput({ type, placeholder, name, value, handleChange }) {
    return(
        <div className={styles.container}>
            <input 
                type={ type ? type : "text" }
                placeholder={placeholder}
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                className={styles.input}
            />
        </div>
    )
}

export default TextInput;