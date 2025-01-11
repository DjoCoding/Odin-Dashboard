import dotenv from "dotenv"
import jwt from "jsonwebtoken"

const DAY = 3600 * 24;

dotenv.config();
const SECRET = process.env.SECRET;

function generate(payload) {
    return jwt.sign(
        payload, 
        SECRET,
        {
            expiresIn: DAY,
        }
    )
}

function check(token) {
    return jwt.verify(token, SECRET);
}

export default { generate, check };