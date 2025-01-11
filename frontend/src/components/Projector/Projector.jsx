import styles from "./Projector.module.css"

import ProjectorHeader from "../ProjectorComponents/ProjectorHeader/ProjectorHeader"
import ProjectorMain from "../ProjectorComponents/ProjectorMain/ProjectorMain"

function Projector({ isLogin }) {
    return(
        <div 
            className={styles.container}
            style={{
                background: isLogin ?  "linear-gradient(to right, #eee, #fff)" : "linear-gradient(to right, #1892aa, #1892ff)"
            }}
        >
            <ProjectorHeader />
            <ProjectorMain isLogin={isLogin} />
        </div>
    )
}

export default Projector;   