import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type : String,
        required: [true, "User Name is Required"],
        unique: [true, "User Name must be Unique"]
    },
    email: {
        type : String,
        required: [true, "User Name is Required"],
        unique: [true, "User Name must be Unique"]
    },
    password: {
        type : String,
        required: [true, "User Name is Required"],
        unique: [true, "User Name must be Unique"]
    }
})


const userModel = mongoose.model("user", userSchema)
export default userModel