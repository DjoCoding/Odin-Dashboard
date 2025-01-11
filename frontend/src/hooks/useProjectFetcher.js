import { useState } from "react";
import axios from "axios";

import DOMAIN from "../utils/const.js"
import serve from "../helpers/serve.js";

function useProjectFetcher() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [project, setProject] = useState(null);

    const fetchProject = async (userID, projectID) => {
        setIsLoading(true);

        try {
            const endpoint = `api/projects/${userID}/${projectID}`;
            const route = `${DOMAIN}/${endpoint}`
            const res = await axios.get(route);
            return serve(() => setProject(res.data), setIsLoading);
        } catch(err) {
            return serve(() => setError(err), setIsLoading);
        }
    }

    return { fetchProject, project, error, isLoading };
}

export default useProjectFetcher;