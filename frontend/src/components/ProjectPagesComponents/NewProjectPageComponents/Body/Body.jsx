import styles from "./Body.module.css"

import Header from "../../CommonComponents/Header/Header";
import Main from "../BodyComponents/Main/Main";

function Body() {
    return(
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Header onCreation={true} />
                <Main />
            </div>
        </div>
    )
}

export default Body;