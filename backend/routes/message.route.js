import express from "express";
import { getMessages, sendMessages } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// get messages
router.get("/:id",protectRoute,getMessages);




// id = receiver id 
router.post("/send/:id",protectRoute,sendMessages);




export default router;
