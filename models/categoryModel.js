import { prisma } from "../lib/prisma.js";

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany({ select: { id, name } });

    return categories;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}
