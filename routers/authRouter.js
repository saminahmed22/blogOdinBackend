import { Router } from "express";
export const authRouter = Router();

// Lib
import passport from "passport";

import {
  renderLoginPage,
  handleLoginRequest,
  renderRegisterPage,
  handleRegisterRequest,
} from "../controllers/authController.js";

// Get
authRouter.get("/login", renderLoginPage);

authRouter.get("/register", renderRegisterPage);

// Post
authRouter.post(
  "/login",
  handleLoginRequest,
  // passport.authenticate("jwt", {
  //   failureFlash: true,
  //   successRedirect: "/",
  //   failureRedirect: "/auth/login",
  // }),
);

authRouter.post("/register", handleRegisterRequest);
