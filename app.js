import "dotenv/config";

// Express
import express from "express";
const app = express();

// Routes
import { profileRouter } from "./routers/profileRouter.js";
import { postRouter } from "./routers/postRouter.js";
import { commentRouter } from "./routers/commentRouter.js";
import { adminRouter } from "./routers/adminRouter.js";

app.use("/profile", profileRouter);
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
