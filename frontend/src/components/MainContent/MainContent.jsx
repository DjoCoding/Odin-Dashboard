import styles from "./MainContent.module.css"

import MainContentHeader from "../MainContentComponents/MainContentHeader/MainContentHeader";
import MainContentBody from "../MainContentComponents/MainContentBody/MainContentBody";

function MainPage({ user }) {
    return(
        <div className={styles.container}>
            <MainContentHeader user={user} />
            <MainContentBody />
        </div>
    )
}

export default MainPage;