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
  getUserDraftedPosts,
  toggleUserDraftedPosts,
  getUserBookmarks,
  setUserPostBookmark,
  deleteUserPostBookmark,
  createPostVote,
  deletePostVote,
} from "../controllers/postController.js";

// Validators
import { validateSearch } from "../validators/searchValidator.js";

// GET
postRouter.get("/feed", getPosts);

postRouter.get("/user", getUserPosts);

postRouter.get("/user/drafts", getUserDraftedPosts);

postRouter.get("/search", validateSearch, findPosts);

postRouter.get("/:postId", getPost);

postRouter.get("/user/bookmark", getUserBookmarks);

// POST
postRouter.post("/", createPost);

postRouter.post("/user/bookmark", setUserPostBookmark);

postRouter.post("/user/vote", createPostVote);

// PUT
postRouter.put("/", editPost);

postRouter.put("/user/drafts", toggleUserDraftedPosts);

// DELETE
postRouter.delete("/", deletePost);

postRouter.delete("/user/bookmark", deleteUserPostBookmark);

postRouter.delete("/user/vote", deletePostVote);
