import { prisma } from "../lib/prisma.js";

export async function getCategoriesDB() {
  try {
    const content = await prisma.category.findMany({
      select: { id: true, name: true, color: true },
    });

    return content;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function createCategories(categories) {
  try {
    const createdCategories = await prisma.category.createMany({
      data: categories,
    });

    return createdCategories;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}
