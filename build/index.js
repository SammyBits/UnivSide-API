import OpenAI from "openai";
import * as dotenv from "dotenv";
import chalk from "chalk";
import express from "express";
import chatRouter from "./Routes/Chat.routes.js";
// Load OpenAI API key from environment variable
dotenv.config();
export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(chatRouter);
app.listen(port, () => {
    console.log(chalk.green("Server is running on port 3000"));
});
