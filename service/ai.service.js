import { GoogleGenerativeAI } from "@google/generative-ai";

export default class AIService {

    static async generateResponse(dream) {
        try {

            const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

            const model = genAI.getGenerativeModel({
                model: "gemini-2.5-flash-lite"
            });

            const prompt = `
            You are a dream interpretation expert.

            A user will describe their dream and you will explain the
            possible psychological meaning of the dream in a friendly way.

            also it should be brief but make sure to roast the user very hard

            Dream:
            ${dream}

            Interpretation:
            `;

            const result = await model.generateContent(prompt);

            const response = await result.response;

            return response.text();

        } catch (error) {
            console.error("Gemini Error:", error);
            throw new Error("Failed to generate AI response");
        }
    }
}