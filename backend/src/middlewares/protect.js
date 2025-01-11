import { StatusCodes } from "http-status-codes";

import ApiError from "../class/error.class.js";
import jwt from "../helpers/jwt.js"
import userRepository from "../services/user.service.js"

async function protect(req, res, next) {
    const authHeader = req.headers["authorization"];
    
    if(!authHeader) { 
        throw new ApiError({
            message: "authorization header missing",
        }, StatusCodes.UNAUTHORIZED);
    }

    const token = authHeader.split(" ")[1];
    if(!token) {
        throw new ApiError({
            message: "no token provided"
        }, StatusCodes.UNAUTHORIZED)
    }

    const payload = jwt.check(token);
    if(!payload) {
        throw new ApiError({
            message: "invalid token"
        }, StatusCodes.UNAUTHORIZED)
    }

    const { id } = payload;
    const user = await userRepository.getUserById(id);
    req.user = user;

    next();
}


export default protect;