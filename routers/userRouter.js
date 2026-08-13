import { Router } from "express";
export const userRouter = Router();

// Controller
import {
  getUser,
  createUser,
  editUser,
  deleteUser,
} from "../controllers/userController.js";

userRouter.get("/:id", getUser);

userRouter.post("/", createUser);

userRouter.put("/", editUser);

userRouter.delete("/:id", deleteUser);
