import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import Loading from "../components/Loading/Loading";

import useUserFetcher from "../hooks/useUserFetcher";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children }) {
    const navigate = useNavigate();
    const { isfound, fetchUser, error, isLoading } = useUserFetcher();
    const { auth } = useAuth();

    useEffect(() => {
        console.log('fetching user');
        fetchUser();
    }, []);

    useEffect(() => {
        if(!auth) { return; }
        if(!auth.user) { 
            navigate("/login");
        }
    }, [auth]);

    if(isLoading) {
        return(
            <Loading />
        )
    }

    if(error) { 
        return <Navigate to="/login" />
    }

    if(auth.user && isfound) { 
        return children;
    }

    return children;
}

export default PrivateRoute;