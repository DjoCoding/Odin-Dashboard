import { motion } from "framer-motion";

import Project from "../Project/Project";

import styles from "./Projects.module.css"

const projectsContainer = {
    initial: { 
        opacity: 1
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.6
        }
    }
}

function Projects({ projects }) {
    const projectItems = projects === "undefined" ? [] : projects.map(project => {
        return (
            <Project 
                id={project.id}
                key={project.id}
                name={project.name}
                description={project.description}
                ispublic={project.ispublic}
            />
        )
    })

    return(
        <div className={styles.container} >
            <header>
                <h1>your projects</h1>
            </header>
            <motion.div 
                variants={projectsContainer}
                initial="initial"
                animate="animate"
                className={styles.projectsContainer}>
                { projectItems }
            </motion.div>
        </div>
    )
}

export default Projects;