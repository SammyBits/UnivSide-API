import express from "express";
const router = express.Router();

import { ChatServices } from "../Services/ChatServices.js";
import { PromptMessage } from "../Model/PromptMessage.js";

router.post("/chat", async (req, res) => {
  try {
    const input: PromptMessage = req.body;
    await ChatServices(input, res);
  } catch (error) {
    res.send(error);
    console.log(JSON.stringify(error, null, 2));
  }
});

export default router;
