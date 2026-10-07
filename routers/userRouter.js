import { validationResult } from "express-validator";

import { Router } from "express";
export const userRouter = Router();

// Validator

import { validateRegisterForm } from "../validators/regFormValidator.js";

// Controller
import {
  getUser,
  createUser,
  editUser,
  deleteUser,
} from "../controllers/userController.js";

userRouter.get("/:id", getUser);

userRouter.post(
  "/",
  validateRegisterForm,
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
  createUser,
);

userRouter.put("/", editUser);

userRouter.delete("/:id", deleteUser);
