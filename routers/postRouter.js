import { Router } from "express";

export const postRouter = Router();

// Controller
import {
  getPost,
  getPosts,
  findPosts,
  createPost,
  editPost,
  deletePost,
} from "../controllers/postController.js";

postRouter.get("/feed", getPosts);

postRouter.get("/search", findPosts);

postRouter.get("/:id", getPost);

postRouter.post("/", createPost);

postRouter.put("/", editPost);

postRouter.delete("/:id", deletePost);
