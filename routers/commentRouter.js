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
  editComment,
);

commentRouter.delete("/", deleteComment);
