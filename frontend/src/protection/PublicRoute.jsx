import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import Loading from "../components/Loading/Loading";

import useUserFetcher from "../hooks/useUserFetcher";

function PublicRoute({ children }) {
    const { isfound, fetchUser, error, isLoading } = useUserFetcher();

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    if(isfound) {
        return <Navigate to="/" />
    }

    if(error) {
        return children; 
    }

    if(isLoading) { 
        return <Loading />
    }

    return children;
}

export default PublicRoute;