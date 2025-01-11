import { motion } from "framer-motion"

import ProjectActionButton from "../ProjectActionButton/ProjectActionButton";

import styles from "./Project.module.css"


const projectItem = {
    initial: { opacity: 0, y: 50 }, 
    animate: { opacity: 1, y: 0 }  
};

const projectName = {
    hidden: {
        y: 50,
        opacity: 0,
    }, 
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.2,
            delay: 0.1
        }
    }
}

const projectDescription = { 
    hidden: {
        y: 50,
        opacity: 0,
    }, 
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.3
        }
    }
}

function Project({ id, name, description, ispublic }) {
    return(
        <motion.div 
            variants={projectItem}
            id={id} 
            className={styles.container}
        >
            <motion.h2
            variants={projectName}
            initial="hidden"
            animate="visible"            
            > { name }</motion.h2>
            
            <motion.div 
                className={styles.descriptionContainer}
                variants={projectDescription}
                initial="hidden"
                animate="visible"
            >
                
                <p>{ description }</p>
            </motion.div>
            
            <div className={styles.projectActionsContainer}>
                <div className={styles.stateContainer}>
                    { 
                        ispublic 
                        ? 
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"/></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
                    }
                </div>
                <div className={styles.projectActions}>
                    <ProjectActionButton>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C14.9 12 12.4 14.3 12 17.3L5.8 21M17 14V17H14V19H17V22H19V19H22V17H19V14H17Z" /></svg>
                    </ProjectActionButton>
                    <ProjectActionButton
                        linkable={{
                            link: "/projects/edit",
                            projectID: id
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                    </ProjectActionButton>
                    <ProjectActionButton>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,14C9.64,14 8.54,15.35 8.18,16.24C9.25,16.7 10,17.76 10,19A3,3 0 0,1 7,22A3,3 0 0,1 4,19C4,17.69 4.83,16.58 6,16.17V7.83C4.83,7.42 4,6.31 4,5A3,3 0 0,1 7,2A3,3 0 0,1 10,5C10,6.31 9.17,7.42 8,7.83V13.12C8.88,12.47 10.16,12 12,12C14.67,12 15.56,10.66 15.85,9.77C14.77,9.32 14,8.25 14,7A3,3 0 0,1 17,4A3,3 0 0,1 20,7C20,8.34 19.12,9.5 17.91,9.86C17.65,11.29 16.68,14 13,14M7,18A1,1 0 0,0 6,19A1,1 0 0,0 7,20A1,1 0 0,0 8,19A1,1 0 0,0 7,18M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M17,6A1,1 0 0,0 16,7A1,1 0 0,0 17,8A1,1 0 0,0 18,7A1,1 0 0,0 17,6Z" /></svg>
                    </ProjectActionButton>   
                </div>
            </div>
        </motion.div>
    )
}

export default Project;