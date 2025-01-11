import { Link } from "react-router-dom";

import styles from "./ActionButton.module.css"

function ActionButton({ value, href }) {
    return(
        <button className={styles.button}>
            <Link to={href}>{ value }</Link>
        </button>
    )
}

export default ActionButton;