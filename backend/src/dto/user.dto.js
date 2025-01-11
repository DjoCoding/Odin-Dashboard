class UserDTO {
    constructor(id, firstname, lastname, username, email) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
    }
}

function getUserDTOfromEntity(user) { 
    const { _id: id, firstname, lastname, username, email } = user; 
    return new UserDTO(id, firstname, lastname, username, email);
}

function getUsersDTOfromEntity(users) {
    return users.map(user => getUserDTOfromEntity(user));
}

export default { getUserDTOfromEntity, getUsersDTOfromEntity };