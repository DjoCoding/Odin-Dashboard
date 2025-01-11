import styles from "./Announcement.module.css"

function Announcement({ title, details }) {
    return(
        <div className={styles.container}>
            <h3>
                { title }
            </h3>
            <p>
                {details}
            </p>
        </div>
    )
}

export default Announcement;