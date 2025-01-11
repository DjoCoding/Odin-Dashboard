import styles from "./PrivacyTaker.module.css"

import RadioButton from "../Input/RadioButton/RadioButton";

function PrivacyTaker({ buttonChecked, setButtonChecked }) {
    return(
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <RadioButton 
                    id="public"
                    setButtonChecked={setButtonChecked}
                    isPublic={true}
                    name="ispub"
                    checked={buttonChecked === "public"}
                />
            </div>
            <div className={styles.inputContainer}>
                <RadioButton 
                    id="private"
                    setButtonChecked={setButtonChecked}
                    isPublic={false}
                    name="ispub"
                    checked={buttonChecked === "private"}
                />
            </div>
        </div>
    )
}

export default PrivacyTaker