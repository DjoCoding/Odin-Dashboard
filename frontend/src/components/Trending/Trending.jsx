import TrendingProject from "../TrendingProject/TrendingProject";

import styles from "./Trending.module.css"

function Trending() {
    return(
        <div className={styles.container}>
            <h3>
                trending
            </h3>
            <div className={styles.projectsContainer}>
                <TrendingProject 
                    username="djocoding"
                    profilePictureSource="../../../public/bird.png"
                    projectTitle="being the perfect dev"
                />
            </div>
        </div>
    )
}

export default Trending;