import styles from "./IconButton.module.css"

function Icon({ svg }) {
    return(
        <div className={styles.container}>
            <button>
                { svg }
            </button>    
        </div>    
    )
}

export default Icon;