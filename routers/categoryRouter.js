import { Router } from "express";

export const categoryRouter = Router();

// Controllers
import { getCategories } from "../controllers/categoryController.js";

categoryRouter.get("/", getCategories);
