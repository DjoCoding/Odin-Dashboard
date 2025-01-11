import { useContext } from "react";

import provider from "../providers/AuthProvider"

const useAuth = () => useContext(provider.AuthContext);

export default useAuth;