import { useState } from "react";
import useAuth from "./useAuth.js"
import axios from "axios";

import DOMAIN from "../utils/const.js"
import serve from "../helpers/serve.js";

function useProjectEditor() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const { auth } = useAuth();

    const editProject = async (projectID, details) => {
        // set the loading state
        setIsLoading(true);
        
        try {
            const endpoint = `api/users/projects/${projectID}`;
            const route = `${DOMAIN}/${endpoint}`
            await axios.put(route, details, { 
                headers: {
                    Authorization: `Bearer ${auth.accessToken}`
                }
            });
            return serve(() => setSuccess(true), setIsLoading);
        } catch(err) {
            return serve(() => setError(err), setIsLoading);
        }
    }

    return { editProject, success, error, isLoading };
}

export default useProjectEditor;