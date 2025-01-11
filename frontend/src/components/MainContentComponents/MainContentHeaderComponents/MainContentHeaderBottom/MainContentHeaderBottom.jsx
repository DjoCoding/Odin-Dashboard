import { motion } from "framer-motion";

import styles from "./MainContentHeaderBottom.module.css"
import ActionButton from "../../../ActionButton/ActionButton";

const name = {
    hidden: { 
        y: 50,
        opacity: 0
    }, 
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.2,
            delay: 0.2,
        }
    }
}

const img = {
    hidden: {
        opacity: 0
    }, 
    visible: {
        opacity: 1,
        transition: { 
            delay: 1.2,
            duration: 0.5
        }
    }
}

function MainContentHeaderBottom({ user }) {
    return(
        <div className={styles.container}>
            <div className={styles.user}>
                <motion.img 
                    variants={img}
                    initial="hidden"
                    animate="visible"
                    src="../../../public/bird.png" />
                <div className={styles.greetUser}>
                    <p>Hi there,</p>
                    <motion.h2
                        variants={name}
                        initial="hidden"
                        animate="visible"
                    >{user.lastname} {user.firstname} (@{user.username}) </motion.h2>
                </div>
            </div>
            <div className={styles.actions}>
                <ActionButton value="new" href="/projects/new" />
                <ActionButton value="upload" href="/" />
                <ActionButton value="share" href="/" />
            </div>
        </div>
    )
} 

export default MainContentHeaderBottom;