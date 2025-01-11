import styles from "./Text.module.css"

function Text({ label, isRequired, name, value, handleChange }) {
    return(
        <div className={styles.container}>
            <label htmlFor={name}>
                { label }
                <span>
                    { isRequired ? " *" : " (optional)" }
                </span>
            </label>
            <input type="text" id={name} name={name} value={value} onChange={handleChange} />
        </div>
    )
}

export default Text;