import { useState } from "react";
import axios from "axios";

import DOMAIN from "../utils/const.js";
import useAuth from "./useAuth.js";

import serve from "../helpers/serve.js";

function useProjectCreator() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const { auth } = useAuth();

    const createNewProject = async (data) => {
        setIsLoading(true);

        const endpoint = "api/users/projects";
        const route = `${DOMAIN}/${endpoint}`;
    
        try {
            await axios.post(route, data, {
                headers: {
                    Authorization: `Bearer ${auth.accessToken}`
                }
            })
            return serve(() => { setSuccess(true); }, setIsLoading);
        } catch(err) {
            return serve(() => setError(err), setIsLoading);
        } 
    }

    return { success, isLoading, error, createNewProject };
}

export default useProjectCreator;