import toast from "react-hot-toast";

function getErrorMessage(err) {
    const { code } = err;
    if(code && code === "ERR_NETWORK") { return "check your internet connection"; }

    const { error, message } = err?.response?.data;
    if(message) { return message; }
    if(error) { return error; }
    
    return "Internal server error";
}

function handleError(err, cb) {
    toast.error(getErrorMessage(err));
    if(!cb) { return; }
    cb();
}


export default { getErrorMessage, handleError };