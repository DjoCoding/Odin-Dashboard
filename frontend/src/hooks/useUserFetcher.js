import { useState } from "react";

import useAuth from "./useAuth.js";
import axios from "axios";

import DOMAIN from "../utils/const.js";

import serve from "../helpers/serve.js";

function useUserFetcher() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isfound, setIsfound] = useState(false);
    const { auth, setAuth } = useAuth();

    const fetchUser = async () => {
        setIsLoading(true);

        // check if the auth context is initialized
        if(auth.user) { 
            return serve(() => {
                setAuth(auth);
                return setIsfound(true);
            }, setIsLoading);
        }
    
        // check if the user auth data is found in the local storage 
        const item = localStorage.getItem("userAuth");
        if(!item) { return serve(() => setError(Error("failed to fetch user")), setIsLoading); }
    
        // parse the item from the local storag
        const userAuth = JSON.parse(item);

        // get the user from the token
        try { 
            const endpoint = "api/auth/check";
            const route = `${DOMAIN}/${endpoint}`;

            // make the request to check the token
            const res = await axios.post(route, null, {
                headers: {
                    Authorization: `Bearer ${userAuth.accessToken}`
                }
            });

            // if true, set it in the context and return success
            return serve(() => {
                // get the user 
                const { data: user } = res;

                // get the updated data
                const updatedData = { ...userAuth, user };
                
                // set the data in the local storage
                localStorage.setItem("userAuth", JSON.stringify(updatedData));
                
                // reset the auth context
                setAuth(updatedData);

                // return
                return setIsfound(true);
            }, setIsLoading);
        } catch(err) {
            // return error 
            return serve(() => setError(err), setIsLoading);
        } 
    }

    return { isfound, fetchUser, error, isLoading };
}


export default useUserFetcher;