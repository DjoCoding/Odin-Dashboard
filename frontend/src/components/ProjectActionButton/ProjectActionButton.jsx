import { Link } from "react-router-dom";

import styles from "./ProjectActionButton.module.css"

function ProjectActionButton({ children, linkable }) {
    return(
        <button className={styles.button}>
            {
                linkable
                ?
                <>
                    <Link to={`${linkable.link}/${linkable.projectID}`}>
                        { children }
                    </Link>
                </>
                :
                children
            }
        </button>
    )
}


export default ProjectActionButton;