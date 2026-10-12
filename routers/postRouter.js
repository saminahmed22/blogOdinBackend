import { Router } from "express";

export const postRouter = Router();

import passport from "passport";

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

postRouter.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  getUserPosts,
);

postRouter.get("/search", findPosts);

postRouter.get("/:id", getPost);

postRouter.post("/", createPost);

postRouter.put("/", editPost);

postRouter.delete("/:id", deletePost);
