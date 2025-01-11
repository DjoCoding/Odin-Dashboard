import { useState } from "react";
import useAuth from "./useAuth.js";

import DOMAIN from "../utils/const.js"
import axios from "axios";

import serve from "../helpers/serve.js";

function userProjectsFetcher() {
    const [isLoading, setIsLoading] = useState(false);
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const { auth: { accessToken } } = useAuth();

    const fetchMyProjects = async () => {
        setIsLoading(true);

        try {
            const endpoint = "api/users/projects";
            const route = `${DOMAIN}/${endpoint}`;
            const res = await axios.get(route, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            return serve(() => setProjects(res.data), setIsLoading);
        } catch(err) {
            return serve(() => setError(err), setIsLoading);
        }
    }

    return { isLoading, projects, error, fetchMyProjects }; 
}

export default userProjectsFetcher;