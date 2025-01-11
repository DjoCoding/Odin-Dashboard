import { Router } from "express"

import userPostProjectSchema from "../schemas/userPostProject.schema.js";

import asyncHandler from "../helpers/asyncHandler.js";
import validateSchema from "../middlewares/validateSchema.js"
import userController from "../controllers/user.controller.js";
import protect from "../middlewares/protect.js";

const router = Router();

router.get("/", 
    asyncHandler(userController.getUsers)
);

router.delete("/", 
    asyncHandler(userController.deleteUsers)
)

router.get("/projects", 
    [ asyncHandler(protect) ], 
    asyncHandler(userController.getUserProjects)
);

router.post("/projects", 
    [ validateSchema(userPostProjectSchema), asyncHandler(protect) ], 
    asyncHandler(userController.postUserProject)
)

router.put("/projects/:id", 
    [ validateSchema(userPostProjectSchema), asyncHandler(protect) ], 
    asyncHandler(userController.editUserProject)
)

export default router;