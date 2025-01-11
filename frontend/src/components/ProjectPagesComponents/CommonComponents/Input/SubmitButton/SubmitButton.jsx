import styles from "./SubmitButton.module.css"

function SubmitButton({ onCreation, handleClick }) {
    return(
        <button className={styles.button} onClick={handleClick}>{onCreation ? "Create " : " Edit " } project</button>
    )
}

export default SubmitButton;