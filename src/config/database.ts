import mongoose from "mongoose";
import config from "./config.js";

const uri = config.MONGODB_URI

async function DBConnectFunc() {
    try {
        if (!uri) {
            throw new Error("Database connection string is on .env ")
        }
        await mongoose.connect(uri)
        await mongoose.connection.db?.admin().ping();
        console.log("Pinged your deployment. You successfully connected to MongoDB!")
    }
    catch (error) {
        console.log("Database connection failed:", error)
    }
}

export default DBConnectFunc;