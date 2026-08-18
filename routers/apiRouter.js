import { Router } from "express";
export const apiRouter = Router();

import { userRouter } from "./userRouter.js";
import { postRouter } from "./postRouter.js";
import { commentRouter } from "./commentRouter.js";
import { authRouter } from "./authRouter.js";

apiRouter.use("/auth", authRouter);
apiRouter.use("/user", userRouter);
apiRouter.use("/post", postRouter);
apiRouter.use("/comment", commentRouter);
