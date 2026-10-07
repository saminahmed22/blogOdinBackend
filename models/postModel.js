import { prisma } from "../lib/prisma.js";

export async function getPostDB(postID) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: postID, published: true },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            bio: true,
            profilePictureLink: true,
            username: true,
            role: true,
            theme_color: true,
            joined_at: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    return post;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function getPostsDB(categoryId, quantity) {
  try {
    const posts = await prisma.post.findMany({
      where: { categoryId, published: true },
      take: quantity,
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            bio: true,
            profilePictureLink: true,
            username: true,
            role: true,
            theme_color: true,
            joined_at: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return posts;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function findPostsDB(searchQuery) {
  try {
    const posts = await prisma.post.findMany({
      where: {
        OR: [
          { title: { contains: searchQuery, mode: "insensitive" } },
          { description: { contains: searchQuery, mode: "insensitive" } },
        ],
        published: true,
      },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            bio: true,
            profilePictureLink: true,
            username: true,
            role: true,
            theme_color: true,
            joined_at: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return posts;
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
