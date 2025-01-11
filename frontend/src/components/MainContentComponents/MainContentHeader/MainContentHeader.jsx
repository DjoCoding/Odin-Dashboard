import styles from "./MainContentHeader.module.css"

import MainContentHeaderTop from "../MainContentHeaderComponents/MainContentHeaderTop/MainContentHeaderTop";
import MainContentHeaderBottom from "../MainContentHeaderComponents/MainContentHeaderBottom/MainContentHeaderBottom";

function MainContentHeader({ user }) {    
    return(
        <div className={styles.container}>
            <MainContentHeaderTop user={user} />
            <MainContentHeaderBottom user={user} />
        </div>
    )
}

export default MainContentHeader;