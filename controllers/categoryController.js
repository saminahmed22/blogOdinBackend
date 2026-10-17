import { getCategoriesDB } from "../models/categoryModel.js";

export async function getCategories(req, res, next) {
  const content = await getCategoriesDB();

  res.json({ content });
}
