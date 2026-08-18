import { Router } from "express";
export const authRouter = Router();

// Lib
import passport from "passport";

import {
  renderLoginPage,
  handleLoginRequest,
} from "../controllers/authController.js";

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
