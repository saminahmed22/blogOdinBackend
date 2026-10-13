import { Router } from "express";

export const commentRouter = Router();

// Validator
import { validationResult } from "express-validator";
import { validateComment } from "../validators/commentValidator.js";

// Controller
import {
  getComments,
  createComment,
  editComment,
  deleteComment,
  getUserComments,
} from "../controllers/commentController.js";

import passport from "passport";

commentRouter.get("/", getComments);

commentRouter.get("/user", getUserComments);

commentRouter.post(
  "/",
  validateComment,
  (req, res, next) => {
    const commentValidationErrors = validationResult(req);

    if (!commentValidationErrors.isEmpty()) {
      return res.json({
        success: false,
        validationErrors: commentValidationErrors.errors,
      });
    }

    next();
  },
  passport.authenticate("jwt", { session: false }),
  createComment,
);

commentRouter.put(
  "/",
  validateComment,
  (req, res, next) => {
    const commentValidationErrors = validationResult(req);

    if (!commentValidationErrors.isEmpty()) {
      return res.json({
        success: false,
        validationErrors: commentValidationErrors.errors,
      });
    }

    next();
  },
  passport.authenticate("jwt", { session: false }),
  editComment,
);

commentRouter.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  deleteComment,
);
