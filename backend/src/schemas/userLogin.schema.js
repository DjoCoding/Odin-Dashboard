import Joi from "joi"

const userLoginSchema = Joi.object({
    username: Joi.string().min(5).max(20).required().messages({
        "string.min": "Username min length is 5 characters",
        "string.max": "Username max length is 20 characters",
        "any.required": "Username is required"
    }),
    password: Joi.string().min(8).required().messages({
        "string.min": "Password min length is 8 characters",
        "any.required": "Password is required"
    })
})

export default userLoginSchema;