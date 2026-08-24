import { Router } from "express";

export const postRouter = Router();

// Controller
import {
  getPost,
  getPosts,
  createPost,
  editPost,
  deletePost,
} from "../controllers/postController.js";

postRouter.get("/feed{/:quantity}", getPosts);

postRouter.get("/:id", getPost);

postRouter.post("/", createPost);

postRouter.put("/", editPost);

postRouter.delete("/:id", deletePost);
