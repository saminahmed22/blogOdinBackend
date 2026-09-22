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

//#region Categories
const categoriesArr = [
  { name: "Tech" },
  { name: "Programming" },
  { name: "Web Development" },
  { name: "AI & Machine Learning" },
  { name: "Cybersecurity" },
  { name: "Gadgets" },
  { name: "Science" },
  { name: "Space" },
  { name: "Environment" },
  { name: "Health" },
  { name: "Fitness" },
  { name: "Mental Health" },
  { name: "Lifestyle" },
  { name: "Fashion" },
  { name: "Beauty" },
  { name: "Food" },
  { name: "Cooking" },
  { name: "Travel" },
  { name: "Photography" },
  { name: "Design" },
  { name: "Art" },
  { name: "Music" },
  { name: "Movies" },
  { name: "TV Shows" },
  { name: "Books" },
  { name: "Writing" },
  { name: "Gaming" },
  { name: "Sports" },
  { name: "Business" },
  { name: "Startups" },
  { name: "Finance" },
  { name: "Marketing" },
  { name: "Career" },
  { name: "Education" },
  { name: "Productivity" },
  { name: "Self Improvement" },
  { name: "Relationships" },
  { name: "Parenting" },
  { name: "Politics" },
  { name: "News" },
  { name: "History" },
  { name: "Culture" },
  { name: "Religion & Spirituality" },
  { name: "Philosophy" },
  { name: "Humor" },
  { name: "DIY & Crafts" },
  { name: "Home & Garden" },
  { name: "Cars" },
  { name: "Pets" },
  { name: "Personal Stories" },
  { name: "Nature" },
  { name: "Language Learning" },
];
//#endregion
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

(async () => {
  const c = await createCategories(categoriesArr);

  console.log(c);
})();
