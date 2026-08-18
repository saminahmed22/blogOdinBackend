import "dotenv/config";

// Express
import express from "express";
const app = express();

// Parsing form texts
app.use(express.urlencoded({ extended: true }));

// Passport
import flash from "connect-flash";

import "./lib/passport.js";

app.use(flash());

// Routes
import { apiRouter } from "./routers/apiRouter.js";

app.use("/api", apiRouter);

app.use("/", (req, res, next) => {
  return res.json("Hello!");
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
