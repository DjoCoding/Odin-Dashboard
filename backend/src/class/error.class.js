class ApiError extends Error {
    constructor(obj, statusCode) {
        const { message, error } = obj;
        super(message ? message : "");
        this.error = error;
        this.statusCode = statusCode;
    }

    getStatus() {
        return this.statusCode ? this.statusCode : 500;
    }

    get() {
        if(!this.message && !this.error) {
            return {
                message: "Internal server error"
            }
        }

        if(!this.message) {
            return { 
                error: this.error
            }
        }

        if(!this.error) {
            return {
                message: this.message,
            }
        }

        return {
            message: this.message, 
            error: this.error
        }
    }
}

export default ApiError;