import ApiError from "../class/error.class.js";

function asyncHandler(cb) {
    return async function (req, res, next) {
        try {
            await cb(req, res, next);
        } catch(err) {
            if(err instanceof ApiError) { return next(err); }
            const { message } = err;
            next(new ApiError({ message }));
        }
    }
}

export default asyncHandler;