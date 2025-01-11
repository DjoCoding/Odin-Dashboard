import Announcement from "../Announcement/Announcement";

import styles from "./Announcements.module.css"

function Announcements() {
    return(
        <div className={styles.container}>
            <h3>announcements</h3>
            <div className={styles.announcementsContainer}>
                <Announcement 
                    title="site maintenance" 
                    details="this isdfsfd sfsnfdsnf dnsfnsf dfsndsnlflsnfnsf is fnslssfd nsfdsf nsmnfn ns"
                />
                <Announcement 
                    title="site maintenance" 
                    details="this isdfsfd sfsnfdsnf dnsfnsf dfsndsnlflsnfnsf is fnslssfd nsfdsf nsmnfn ns"
                />
            </div>
        </div>
    )
}

export default Announcements;