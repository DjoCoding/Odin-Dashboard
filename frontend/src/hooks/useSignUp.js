import { useState } from "react"
import axios from "axios";

import DOMAIN from "../utils/const.js";
import serve from "../helpers/serve.js";

function useSignUp() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null); 
    const [success, setSuccess] = useState(false);


    const signUp = async (data) => {
        setIsLoading(true);

        try {
            const endpoint = "api/auth/signup";
            const route = `${DOMAIN}/${endpoint}`;
            await axios.post(route, data);
            return serve(() => setSuccess(true), setIsLoading);
        } catch(err) {
            return serve(() => setError(err), setIsLoading);
        }
    }

    return { success, signUp, isLoading, error };
}

export default useSignUp;

