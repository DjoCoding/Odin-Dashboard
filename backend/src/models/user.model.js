import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstname: {
        type: String, 
        trim: true, 
        required: true
    },
    lastname: {
        type: String, 
        trim: true, 
        required: true, 
    },
    username: {
        type: String, 
        unique: true,
        trim: true,
        required: true
    }, 
    email: {
        type: String, 
        required: true,
        trim: true,
    },
    password: {
        type: String, 
        required: true,
    },
    profilepic: {
        type: String, 
        required: false,
    }
},{
    timestamps: true,
})


const User = mongoose.model('User', userSchema);

export default User;
