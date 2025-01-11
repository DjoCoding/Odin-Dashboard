import styles from "./FormButton.module.css"

function FormButton({ value, handleFormButtonClick }) {
    return(
        <div className={styles.container}>
            <button
                onClick={handleFormButtonClick}    
            >
                { value }
            </button>
        </div>
    )
}

export default FormButton;