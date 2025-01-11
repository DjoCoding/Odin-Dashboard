import { Router } from "express"

import asyncHandler from "../helpers/asyncHandler.js";
import protect from "../middlewares/protect.js";

import userLoginSchema from "../schemas/userLogin.schema.js";
import userSignupSchema  from "../schemas/userSignup.schema.js"
import validateSchema from "../middlewares/validateSchema.js";

import authController from "../controllers/auth.controller.js"

const router = Router();

router.post("/signup", 
    [ validateSchema(userSignupSchema) ],
    asyncHandler(authController.signUpUser)
);

router.post("/login", 
    [ validateSchema(userLoginSchema) ],
    asyncHandler(authController.loginUser)
);


router.post("/check",
    [ asyncHandler(protect) ], 
    authController.checkUser
);

export default router;