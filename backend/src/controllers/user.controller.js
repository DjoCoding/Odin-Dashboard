import { StatusCodes } from "http-status-codes";

import userRepository from "../services/user.service.js"
import projectRepo from "../services/project.service.js"
import userDTO from "../dto/user.dto.js"
import projectDTO from "../dto/project.dto.js"
import ApiError from "../class/error.class.js";

const getUsers = async (req, res) => {
    const users = await userRepository.getUsers();
    return res.status(StatusCodes.OK).json(userDTO.getUsersDTOfromEntity(users));
}

const deleteUsers = async (req, res) => {
    await userRepository.deleteUsers();
    return res.status(StatusCodes.OK).json({ message: "done" })
}

const getUserProjects = async (req, res) => {
    const { user: { id } } = req;
    const projects = await projectRepo.getUserProjects(id);
    return res.status(StatusCodes.OK).json(projectDTO.getProjectsDTOfromEntity(projects));
}

const postUserProject = async (req, res) => {
    const { user: { id }, body: { name, description, ispublic } } = req;

    const isfound = await projectRepo.findProjectByTitleOfUser(id, name);
    if(isfound) {
        return res.status(StatusCodes.CONFLICT).json({
            message: "project name already used"
        })
    }

    const project = await projectRepo.createProject(id, name, description, ispublic);
    return res.status(StatusCodes.CREATED).json(projectDTO.getProjectDTOfromEntity(project));
}

const editUserProject = async (req, res) => {
    const { user: { id: userID }, body: { name, description, ispublic }, params: { id } } = req;

    const isfound = await projectRepo.findProjectByTitleOfUser(userID, name);
    if(isfound) {
        throw new ApiError({ message: `${name} project name is already used`}, StatusCodes.BAD_REQUEST);
    }

    const updatedProject = await projectRepo.editProject(id, { name, description, ispublic });
    return res.status(StatusCodes.OK).json(projectDTO.getProjectDTOfromEntity(updatedProject));
}

export default { getUsers, deleteUsers, getUserProjects, postUserProject, editUserProject };