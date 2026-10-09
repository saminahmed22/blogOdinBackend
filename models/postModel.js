import { prisma } from "../lib/prisma.js";

export async function getPostDB(postID) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: postID, published: true },
      include: { author: true, category: true },
    });

    return post;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function getPostsDB(categoryId, quantity, cursor) {
  try {
    const posts = await prisma.post.findMany({
      take: quantity,
      ...(cursor ? { cursor: { id: cursor } } : {}),
      skip: cursor ? 1 : 0,

      where: { categoryId, published: true },

      include: { author: true, category: true },

      orderBy: { created_at: "desc" },
    });

    const count = await prisma.post.count({
      where: { categoryId, published: true },
    });

    return { posts, count };
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function findPostsDB(searchQuery, quantity, cursor) {
  try {
    const posts = await prisma.post.findMany({
      take: quantity,
      ...(cursor ? { cursor: { id: cursor } } : {}),
      skip: cursor ? 1 : 0,
      where: {
        OR: [
          { title: { contains: searchQuery, mode: "insensitive" } },
          { description: { contains: searchQuery, mode: "insensitive" } },
          {
            author: {
              OR: [
                { firstName: { contains: searchQuery, mode: "insensitive" } },
                { lastName: { contains: searchQuery, mode: "insensitive" } },
              ],
            },
          },
        ],

        published: true,
      },

      include: { author: true, category: true },

      orderBy: { created_at: "desc" },
    });

    const count = await prisma.post.count({
      where: {
        OR: [
          { title: { contains: searchQuery, mode: "insensitive" } },
          { description: { contains: searchQuery, mode: "insensitive" } },
        ],

        published: true,
      },
    });

    return { posts, count };
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function createPostDB(data) {
  try {
    const post = await prisma.post.create({ data });

    return post;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function editPostDB(data) {
  try {
    const post = await prisma.post.update({
      data,
      where: { id: data.id, authorId: data.authorId },
    });

    return { post };
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function deletePostDB(postID) {
  try {
    // TODO: Add author ID check
    const post = await prisma.post.delete({ where: { id: postID } });

    return { Deleted: { post } };
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}
