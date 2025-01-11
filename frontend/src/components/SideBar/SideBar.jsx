import { motion } from "framer-motion"

import Option from "../Option/Option"
import styles from "./SideBar.module.css"
import { upperLinks, downLinks } from "../../utils/sideBarLinks.jsx"

const containerVariants = {
    hidden: {
        opacity: 1
    }, 
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 1.3
        }
    }
}

const innerContainerVariants =  {
    hidden: {
        opacity: 1
    }, 
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

function SideBar() {
    return(
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z" /></svg>
                    <h1>dashboard</h1>
                </div>
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className={styles.optionsContainer}
                >
                    <motion.div 
                        variants={innerContainerVariants}
                        className={`${styles.topOptions}, ${styles.options}`}
                    >
                        {
                            upperLinks.map(link => {
                                return <Option
                                    value={link.value}
                                    svg={link.svg}
                                />
                            })
                        }
                    </motion.div>
                    <motion.div 
                        variants={innerContainerVariants}
                        className={`${styles.topOptions}, ${styles.options}`}>
                        {
                            downLinks.map(link => {
                                return <Option
                                    value={link.value}
                                    svg={link.svg}
                                />
                            })
                        }
                    </motion.div> 
                </motion.div>
            </div>
        </div>
    )
}

export default SideBar;