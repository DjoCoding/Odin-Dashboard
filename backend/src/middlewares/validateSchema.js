import { StatusCodes } from "http-status-codes";
import ApiError from "../class/error.class.js";

function validateSchema(schema) {
    return (req, res, next) => {
        const { body } = req;
        const result = schema.validate(body);
        const { error } = result;
        if(!error) { return next(); }
        const { details } = error;
        const errors = details.map(detail => detail.message);
        return next(new ApiError({ error: errors }, StatusCodes.BAD_REQUEST));
    }
}

export default validateSchema;