import styles from "./Header.module.css"

function Header({ onCreation }) {
    return(
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h1>{ onCreation ? "Create a new " : "Edit"} project</h1>
                <p>A project contains a title and a description. The project data can be updated later so don't worry if you make mistakes!!</p>
            </div>    
            <p>
                Required fields are marked with an asterisk (*).
            </p>
        </div>
    )
}

export default Header;