import { useParams } from "react-router-dom";

import styles from "./EditProjectPage.module.css"

import NavBar from "../../components/ProjectPagesComponents/CommonComponents/NavBar/NavBar";
import Body from "../../components/ProjectPagesComponents/EditProjectPageComponents/Body/Body";

function EditProjectPage() {
    const { projectID } = useParams();

    return(
        <div className={styles.container}>
            <NavBar />
            <Body projectID={projectID} />
        </div>
    )
}

export default EditProjectPage;