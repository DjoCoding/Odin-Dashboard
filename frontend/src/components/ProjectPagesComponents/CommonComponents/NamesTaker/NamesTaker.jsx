import styles from "./NamesTaker.module.css"

import Text from "../Input/Text/Text";

function NamesTaker({ details, handleChange }) {
    return(
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <Text label="Project name" isRequired={true} name="name" value={details.name} handleChange={handleChange} />
                <p>Great project names are short and memorable.</p>  
            </div>
            <div className={styles.inputContainer}>
                <Text label="Description" isRequired={false} name="description" value={details.description} handleChange={handleChange} />
            </div>
        </div>
    )
}

export default NamesTaker;