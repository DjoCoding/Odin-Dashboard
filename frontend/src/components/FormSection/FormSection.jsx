import styles from "./FormSection.module.css"

import FormHeader from "../AuthFormComponents/FormHeader/FormHeader";
import Form from "../AuthFormComponents/Form/Form";
import FormFooter from "../AuthFormComponents/FormFooter/FormFooter";

function FormSection({ isLogin }) {
    return(
        <div className={styles.container}
            style={{
                background: isLogin ? "linear-gradient(to right, #1892aa, #1892ff)" : "linear-gradient(to right, #eee, #fff)"
            }}
        >
            <FormHeader isLogin={isLogin} />
            <Form isLogin={isLogin} />
            <FormFooter isLogin = { isLogin }/>
        </div>
    )
}

export default FormSection;