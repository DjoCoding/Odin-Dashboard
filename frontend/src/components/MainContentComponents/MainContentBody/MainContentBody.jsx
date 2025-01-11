import { useEffect } from "react";
import toast from "react-hot-toast";

import styles from "./MainContentBody.module.css"

import Projects from "../../Projects/Projects.jsx";
import Announcements from "../../Announcements/Announcements.jsx";
import Trending from "../../Trending/Trending.jsx";
import Loading from "../../Loading/Loading.jsx";

import useFetchProjects from "../../../hooks/useProjectsFetcher.js";

function MainContentBody() {
    const { isLoading, error, projects, fetchMyProjects } = useFetchProjects(); 
    
    useEffect(() => {
        fetchMyProjects();
    }, []);    

    if(error) {
        const { code } = error;
        if(code && code === "ERR_NETWORK") { return toast.error("check your internet connection"); }

        const { message, err } = error.response?.data;
        if(message) { return toast.error(message); }
        if(err) { return toast.error(err); }

        return toast.error("internal server error"); 
    }

    if(isLoading) {
        return( 
            <Loading />
        )
    }

    return(
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <Projects projects={projects} />
            </div>
            <div className={styles.rightContainer}>
                <Announcements />
                <Trending />
            </div>
        </div>
    )
}

export default MainContentBody;