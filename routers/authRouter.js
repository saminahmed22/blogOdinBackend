import { Router } from "express";
export const authRouter = Router();

import { handleLoginRequest } from "../controllers/authController.js";

// Post
authRouter.post("/login", handleLoginRequest);
