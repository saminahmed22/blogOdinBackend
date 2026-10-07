import { body } from "express-validator";

import { getUserDB } from "../models/userModel.js";

export const validateRegisterForm = [
  body("firstName")
    .notEmpty()
    .withMessage("Please enter your first name.")
    .bail()
    .not()
    .isNumeric()
    .withMessage("Name can only contain letters.")
    .bail()
    .trim()
    .escape(),

  body("lastName")
    .notEmpty()
    .withMessage("Please enter your last name.")
    .bail()
    .not()
    .isNumeric()
    .withMessage("Name can only contain letters.")
    .bail()
    .trim()
    .escape(),

  body("username")
    .notEmpty()
    .withMessage("Please enter a username.")
    .bail()
    .custom(async (value) => {
      const exists = !!(await getUserDB({ username: value }));
      if (exists) {
        throw new Error(
          "This username already exists, try out a different one please.",
        );
      }
      return true;
    })
    .bail()
    .trim()
    .escape(),

  body("password")
    .notEmpty()
    .withMessage("Please enter a strong password.")
    .bail()
    .isStrongPassword({
      minUppercase: 1,
      minLowercase: 1,
      minNumbers: 2,
      minSymbols: 1,
      minLength: 8,
    })
    .withMessage(
      "Password must be 8-100 characters long and include at least one uppercase letter, one lowercase letter, two digits, and one symbol.",
    ),

  body("rePassword").custom((value, { req }) => {
    if (req.body.password?.length < 1) {
      return true;
    } else if (req.body.password.length > 0 && value.length < 1) {
      throw new Error("Please re-enter the password.");
    } else if (value !== req.body.password) {
      throw new Error("Passwords don't match.");
    }
    return true;
  }),
];
