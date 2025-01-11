import styles from "./TrendingProject.module.css"

function TrendingProject({ username, projectTitle, profilePictureSource }) {
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={profilePictureSource} />
            </div>
            <div className={styles.right}>
                <p>@{ username }</p>
                <p>{ projectTitle} </p>
            </div>
        </div>
    )
}

export default TrendingProject;