import { StatusCodes } from "http-status-codes";

import projectDTO from "../dto/project.dto.js";
import projectRepo from "../services/project.service.js"
import ApiError from "../class/error.class.js";

const getProjectsOfUser = async (req, res) => {
    const { params: { userID } } = req;
    const projects = await projectRepo.getUserProjects(userID);
    return res.status(StatusCodes.OK).json(projectDTO.getProjectsDTOfromEntity(projects));
}

const getProjectOfUser = async (req, res) => {
    const { params: { userID, projectID } } = req;

    const project = await projectRepo.findUserProject(userID, projectID);
    if(!project) { 
        throw new ApiError({ message: `invalid project id` }, StatusCodes.BAD_REQUEST);
    }
    
    return res.status(StatusCodes.OK).json(projectDTO.getProjectDTOfromEntity(project));
}

const removeProjects = async (req, res) => {
    await projectRepo.removeAllProjects();
    return res.sendStatus(StatusCodes.OK);
}

export default { getProjectsOfUser, getProjectOfUser, removeProjects };