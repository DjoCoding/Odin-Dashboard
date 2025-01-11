import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    }, 
    name: {
        type: String, 
        required: true, 
        trim: true
    }, 
    description: {
        type: String, 
        trim: true,
    }, 
    ispublic: { 
        type: Boolean,
        required: true
    }
}, {
    timestamps: true,
})

const Project = mongoose.model("Project", projectSchema);

export default Project;