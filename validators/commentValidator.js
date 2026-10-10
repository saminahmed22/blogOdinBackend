import { body } from "express-validator";

export const validateComment = [
  body("comment").notEmpty().withMessage("empty").bail().trim().escape(),
];
