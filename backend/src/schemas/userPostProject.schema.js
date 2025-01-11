import Joi from "joi"

const userPostProjectSchema = Joi.object({
    name: Joi.string().max(255).required().messages({
        "string.max": "Project name max length is 255 characters",
        "any.required": "Project name is required"
    }),
    description: Joi.string().allow(""),
    ispublic: Joi.bool().required()
});

export default userPostProjectSchema;