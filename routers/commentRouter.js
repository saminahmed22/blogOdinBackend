import { Router } from "express";

export const commentRouter = Router();

// Controller
import {
  getComments,
  createComment,
  editComment,
  deleteComment,
} from "../controllers/commentController.js";

import passport from "passport";

commentRouter.get("/:postId", getComments);

commentRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createComment,
);

commentRouter.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  editComment,
);

commentRouter.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteComment,
);
