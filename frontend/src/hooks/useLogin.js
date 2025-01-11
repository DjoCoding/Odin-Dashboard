import { useState } from "react";
import axios from "axios";

import DOMAIN from "../utils/const.js";
import useAuth from "./useAuth.js";
import serve from "../helpers/serve.js";

function useLogin() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isfound, setIsfound] = useState(false);
    const { setAuth } = useAuth();

    const login = async (credentials) => {
        const endpoint = "api/auth/login";
        const route = `${DOMAIN}/${endpoint}`;
        setIsLoading(true);

        try {
            const res = await axios.post(route, credentials);
            const userAuth = { accessToken: res.data.token, user: res.data.user };
            return serve(() => {
                localStorage.setItem("userAuth", JSON.stringify(userAuth));
                setAuth(userAuth);
                return setIsfound(true);
            }, setIsLoading);
        } catch(err) {
            return serve(() => setError(err), setIsLoading);
        }
    }

    return { isfound, login, isLoading, error }
}

export default useLogin;