import { Router } from "express"

import asyncHandler from "../helpers/asyncHandler.js"
import projectController from "../controllers/project.controller.js";

const router = Router();

router.get("/:userID", 
    asyncHandler(projectController.getProjectsOfUser)
);

router.get("/:userID/:projectID", 
    asyncHandler(projectController.getProjectOfUser)
)

router.delete("/", 
    asyncHandler(projectController.removeProjects)
)   

export default router;