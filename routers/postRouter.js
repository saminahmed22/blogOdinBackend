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
  getUserPosts,
} from "../controllers/postController.js";

postRouter.get("/feed", getPosts);

postRouter.get("/user", getUserPosts);

postRouter.get("/search", findPosts);

postRouter.get("/:postId", getPost);

postRouter.post("/", createPost);

postRouter.put("/", editPost);

postRouter.delete("/:id", deletePost);
