import { getCategoriesDB } from "../models/categoryModel.js";

export async function getCategories(req, res, next) {
  const allCategories = await getCategoriesDB();

  res.json(allCategories);
}
