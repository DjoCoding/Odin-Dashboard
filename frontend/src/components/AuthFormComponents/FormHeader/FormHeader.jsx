import styles from "./FormHeader.module.css"

function FormHeader({ isLogin }) {
    return(
        <header className={styles.container}>
            <h1>
                {
                    isLogin 
                    ?
                    "welcome back!"
                    :
                    "create your account."
                }
            </h1>
        </header>
    )
}

export default FormHeader;