import { body } from "express-validator";

export const validateLoginForm = [
  body("username").notEmpty().withMessage("empty").bail().trim().escape(),

  body("password").notEmpty().withMessage("empty").bail(),
];
