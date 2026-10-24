import { body } from "express-validator";

export const validatePost = [
  body("title")
    .notEmpty()
    .withMessage("title")
    .bail()
    .isLength({ max: 200 })
    .withMessage("titleLen")
    .trim(),

  body("plain")
    .custom(async (value) => {
      const valueArr = value.split("\n");

      const valueStr = valueArr.join("");

      if (valueStr.length < 1) {
        throw new Error("desc");
      }

      return true;
    })
    .bail()
    .trim(),
];
