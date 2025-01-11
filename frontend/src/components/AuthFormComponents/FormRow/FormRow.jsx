import styles from "./FormRow.module.css"

function FormRow({ children }) {
    return(
        <div className={styles.container}>
            { children }
        </div>
    )
}

export default FormRow;