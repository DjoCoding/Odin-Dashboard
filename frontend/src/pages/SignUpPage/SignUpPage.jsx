import styles from "./SignUpPage.module.css"

import Projector from "../../components/Projector/Projector";
import FormSection from "../../components/FormSection/FormSection"

function SignUpPage() {
    return(
        <div className={styles.container}>
            <Projector isLogin={false} />
            <FormSection isLogin={false} />
        </div>
    )
}

export default SignUpPage;