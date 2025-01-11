import Header from "../../CommonComponents/Header/Header"
import Main from "../BodyComponents/Main/Main";
import styles from "./Body.module.css"

function Body({ projectID }) {
    return(
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Header onCreation={false} />
                <Main projectID={projectID} />
            </div>
        </div>
    )
}

export default Body;