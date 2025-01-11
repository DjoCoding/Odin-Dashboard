import User from "../models/user.model.js"

async function createUser(data) {
    const user = new User(data);
    const result = await user.save();
    return result;
}

async function getUserByUsername(username) {
    return await User.findOne({ username })
}

async function getUserById(id) {
    return await User.findById(id);
}

async function getUsers() {
    return await User.find();
}

async function deleteUsers() {
    return await User.deleteMany();
}

export default { createUser, getUserById, getUsers, getUserByUsername, deleteUsers };