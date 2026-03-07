import { Router } from "express";
import AIController from "../controller/ai.controller.js";


const router = Router()

router.post('/response', AIController.getAIResponse)


// Correct export for an Express Router instance


export default router;