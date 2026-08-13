import { Router } from "express";
export const apiRouter = Router();

import { userRouter } from "../routers/userRouter.js";

apiRouter.use("/user", userRouter);
