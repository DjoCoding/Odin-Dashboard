import useAuth from "./useAuth.js"

function useLogout() {
    const { setAuth } = useAuth();

    const logout = () => {
        setAuth(null);
        localStorage.removeItem("userAuth");
    }

    return { logout };
}

export default useLogout; 