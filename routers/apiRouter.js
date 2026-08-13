import { Router } from "express";
export const apiRouter = Router();

import { userRouter } from "./userRouter.js";
import { postRouter } from "./postRouter.js";
import { commentRouter } from "./commentRouter.js";

apiRouter.use("/user", userRouter);
apiRouter.use("/post", postRouter);
apiRouter.use("/comment", postRouter);
