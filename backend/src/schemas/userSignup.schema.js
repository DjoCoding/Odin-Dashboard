import Joi from "joi"

const userSignupSchema = Joi.object({
    firstname: Joi.string().min(3).max(20).required().messages({
        "string.min": "First name min length is 3 characters",
        "string.max": "First name max length is 20 characters",
        "any.required": "First name is required"
    }),
    lastname: Joi.string().min(3).max(20).required().messages({
        "string.min": "Last name min length is 3 characters",
        "string.max": "Last name max length is 20 characters",
        "any.required": "Last name is required"
    }),
    email: Joi.string().email().required(),
    username: Joi.string().min(5).max(20).required().messages({
        "string.min": "Username min length is 5 characters",
        "string.max": "Username max length is 20 characters",
        "any.required": "Username is required"
    }),
    password: Joi.string().min(8).required().messages({
        "string.min": "Password min length is 8 characters",
        "any.required": "Password is required"
    }),
    confirmPassword: Joi.required().valid(Joi.ref("password")).messages({
        "any.only": "Confirm password should match Password",
        "any.required": "Confirm password is required"
    })
})

export default userSignupSchema;