import "dotenv/config";

// Express
import express from "express";
const app = express();

// Parsing texts
app.use(express.urlencoded({ extended: true }));

// Routes
import { userRouter } from "./routers/userRouter.js";
import { postRouter } from "./ForLater/postRouter.js";
import { commentRouter } from "./ForLater/commentRouter.js";
import { adminRouter } from "./ForLater/adminRouter.js";

app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
app.use("/admin", adminRouter);

app.use("/", (req, res, next) => {
  return res.send("Hello");
});

// Listener
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.error(
      `An Error has occured while trying to listen port: ${port}.\nError: ${err}`,
    );
  } else {
    console.log(`Listening on port: ${port}`);
  }
});
