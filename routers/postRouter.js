import { Router } from "express";

export const postRouter = Router();

// Controller
import {
  getPost,
  createPost,
  editPost,
  deletePost,
} from "../controllers/postController.js";

postRouter.get("/:id", getPost);

postRouter.post("/", createPost);

postRouter.put("/", editPost);

postRouter.delete("/:id", deletePost);
