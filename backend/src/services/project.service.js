import Project from "../models/project.model.js"

async function getUserProjects(id) {
    return await Project.find({ userID: id });
}

async function createProject(userID, name, description, ispublic) {
    const project = new Project({
        userID, name, description, ispublic
    });

    return await project.save();
}

async function findProjectByTitleOfUser(userID, name) {
    return await Project.findOne({ userID, name });
}

async function findUserProject(userID, projectID) {
    return await Project.findOne({ userID, _id: projectID });
}

async function findProjectByID(id) {
    return await Project.findById(id);
}


async function editProject(id, data) { 
    return await Project.findByIdAndUpdate(id, data, { new: true });
}

async function removeAllProjects() {
    return await Project.deleteMany();
}

export default { createProject, removeAllProjects, editProject, getUserProjects, findUserProject, findProjectByTitleOfUser, findProjectByID };