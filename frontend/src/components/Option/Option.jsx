import { motion } from "framer-motion";

import styles from "./Option.module.css"

const itemVariants = { 
    hidden: {
        opacity: 0,
        x: "-100vw",
        origin: 0
    }, 
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3
        }
    }
}

function Option({ svg, value }) {
    return(
        <motion.div 
            variants={itemVariants}
            className={styles.option}>
            { svg }
            <h2>{ value }</h2>
        </motion.div>
    )
}

export default Option;