import { Router } from "express";
export const apiRouter = Router();

import { userRouter } from "./userRouter.js";
import { postRouter } from "./postRouter.js";
import { commentRouter } from "./commentRouter.js";
import { authRouter } from "./authRouter.js";
import { categoryRouter } from "./categoryRouter.js";

import passport from "passport";

const passportCheck = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    req.user = user;

    next();
  });
};

apiRouter.use("/auth", authRouter);
apiRouter.use("/users", passportCheck, userRouter);
apiRouter.use("/posts", passportCheck, postRouter);
apiRouter.use("/comments", passportCheck, commentRouter);
apiRouter.use("/categories", categoryRouter);
