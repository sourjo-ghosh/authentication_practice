import dotenv from "dotenv";

dotenv.config();

if(!process.env.MONGO_URI){
    throw new Error("Mongo DB Uri is missing on .env")
}

const config = {
    MONGODB_URI: process.env.MONGO_URI,
    PORT: process.env.PORT
}

export default config;