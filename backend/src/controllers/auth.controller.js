import { StatusCodes } from "http-status-codes";

import ApiError from "../class/error.class.js"
import jwt from "../helpers/jwt.js"
import hasher from "../helpers/hasher.js"
import userRepository from "../services/user.service.js"
import userDTO from "../dto/user.dto.js";
import capitalize from "../helpers/format.js";

const signUpUser = async (req, res) => {
    const body = req.body;
    const { firstname, lastname, username, email, password } = body;

    const isfound = await userRepository.getUserByUsername(username);
    if(isfound) {
        throw new ApiError(
            {
                message: "username already found"
            }, 
            StatusCodes.CONFLICT
        );
    }

    const hashedPassword = await hasher.hash(password);
    const user = await userRepository.createUser({
        firstname: capitalize(firstname), 
        lastname: capitalize(lastname), 
        username, 
        email, 
        password: hashedPassword
    })

    return res.status(StatusCodes.CREATED).json(userDTO.getUserDTOfromEntity(user));
}

const loginUser = async (req, res) => {
    const { body: { username, password } } = req;
    
    const user = await userRepository.getUserByUsername(username);
    if(!user) {
        throw new ApiError(
            {
                message: "username or password incorrect"
            },
            StatusCodes.BAD_REQUEST
        )
    }    

    if(!await hasher.compare(password, user.password)) {
        throw new ApiError(
            {
                message: "username or password incorrect"
            },
            StatusCodes.BAD_REQUEST
        )
    }

    const token = jwt.generate({ id: user._id, username: user.username });

    return res.status(200).json({ 
        token: token,
        user: userDTO.getUserDTOfromEntity(user)
    });
}

const checkUser = (req, res) => {
    const { user } = req;
    if(!user) {
        throw new ApiError({
            message: "unauthorized"
        }, StatusCodes.UNAUTHORIZED);
    }

    return res.status(StatusCodes.OK).json(userDTO.getUserDTOfromEntity(user));
}

export default { signUpUser, loginUser, checkUser };