import styles from "./Form.module.css"

import LoginForm from "../../LoginForm/LoginForm";
import SignUpForm from "../../SignUpForm/SignUpForm";

function Form({ isLogin }) {
    return(
        <div className={styles.container}>
            {
                isLogin
                ?
                <LoginForm />
                :
                <SignUpForm />
            }
        </div>
    )
}

export default Form;