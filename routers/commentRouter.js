import { Router } from "express";

export const commentRouter = Router();

// Controller
import {
  getComment,
  createComment,
  editComment,
  deleteComment,
} from "../controllers/commentController.js";

commentRouter.get("/:id", getComment);

commentRouter.post("/", createComment);

commentRouter.put("/", editComment);

commentRouter.delete("/:id", deleteComment);
