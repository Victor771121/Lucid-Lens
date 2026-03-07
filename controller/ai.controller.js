import e from "express";
import AIService from "../service/ai.service.js";
export default class AIController {
    static async getAIResponse(req, res) {
        try {
           // add check for empty req body
           // add check for empty string on user input
           // add check for non-string input
           // create a variable to store the req body as dream
           // create a variable to call and store the response from the AIService
           // return the response from the AIService as json
            const { prompt } = req.body;
            if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
                return res.status(400).json({ message: 'Invalid input. Prompt must be a non-empty string.' });
            }
            const aiService = new AIService();
            const aiResponse = await aiService.generateResponse(prompt);
            return res.json({ response: aiResponse });

        } catch (error) {
            return res.status(500).json({ message: 'Internal server error', error: error.message })
        }
}
}