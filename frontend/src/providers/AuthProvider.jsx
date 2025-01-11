import { createContext, useState } from "react";

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ user: null, accessToken: null });
    return(
        <AuthContext.Provider value={{ auth, setAuth }}>
            { children }
        </AuthContext.Provider>
    )
}

export default { AuthProvider, AuthContext };