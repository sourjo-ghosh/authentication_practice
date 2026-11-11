import type { Express } from "express";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import authRouter from "./routes/auth.route.js";

const app: Express = express();
app.use(express.json())

authRouter.use("/api/auth", authRouter)



export default app;