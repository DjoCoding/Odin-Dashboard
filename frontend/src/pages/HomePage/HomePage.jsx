import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import SideBar from "../../components/SideBar/SideBar";
import MainContent from "../../components/MainContent/MainContent";

import styles from "./HomePage.module.css"

import useUserFetcher from "../../hooks/useUserFetcher";
import Loading from "../../components/Loading/Loading";
import useAuth from "../../hooks/useAuth";

function HomePage() {
    const { auth }  = useAuth();
    const { isfound, fetchUser, isLoading, error } = useUserFetcher(); 

    useEffect(() => {
        fetchUser();
    }, []);

    if(error || !auth) { 
        return <Navigate to="/login" />
    }

    if(!isfound || isLoading) {
        return(
            <Loading />
        )
    }

    return(
        <div className={styles.container}>
            <SideBar />
            <MainContent user={auth.user} />
        </div>
    )
}

export default HomePage;