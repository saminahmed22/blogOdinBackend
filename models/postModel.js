import { prisma } from "../lib/prisma.js";

export async function getPostDB(postID) {
  try {
    const post = await prisma.post.findUnique({ where: { id: postID } });

    return post;
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

export async function deletePostDB(postID) {}
