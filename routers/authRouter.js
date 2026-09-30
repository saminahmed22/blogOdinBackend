import { Router } from "express";
export const authRouter = Router();

import { handleLoginRequest } from "../controllers/authController.js";

import { validationResult } from "express-validator";
import { validateLoginForm } from "../validators/loginFormValidator.js";

// Post
authRouter.post(
  "/login",
  validateLoginForm,
  (req, res, next) => {
    const formValidationErrors = validationResult(req);

    if (!formValidationErrors.isEmpty()) {
      return res.status(401).json({
        success: false,
        validationErrors: formValidationErrors.errors,
      });
    }

    next();
  },
  handleLoginRequest,
);
