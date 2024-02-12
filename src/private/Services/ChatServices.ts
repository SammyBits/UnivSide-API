import { PromptMessage } from "../Model/PromptMessage.js";
import { Response } from "express";
import { openai } from "../index.js";
export const ChatServices = async (input: PromptMessage, res: Response) => {
  try {
    if (!input.content) {
      res.status(400).send("Content is required");
      return;
    }


    // Send the prompt to the OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: input.content
        .split("\n")
        .map((message) => ({ role: "user", content: message })),
    });
    // Print the response from the API
    return res.status(200).json({data: response.choices[0].message.content});
  } catch (error) {
    res.status(500).send("Internal Server Error");
    console.log(JSON.stringify(error, null, 2));
  }
};
