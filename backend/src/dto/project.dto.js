class ProjectDTO {
    constructor(id, userID, name, description, ispublic) {
        this.id = id;
        this.userID = userID;
        this.name = name;
        this.description = description;
        this.ispublic = ispublic;
    }
}

function getProjectDTOfromEntity(project) {
    const { _id: id, userID, name, description, ispublic } = project;
    return new ProjectDTO(id, userID, name, description, ispublic);
}

function getProjectsDTOfromEntity(projects) {
    return projects.map(project => getProjectDTOfromEntity(project));
}

export default { getProjectDTOfromEntity, getProjectsDTOfromEntity };