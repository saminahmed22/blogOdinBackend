import { prisma } from "../lib/prisma.js";

export async function getCommentDB(commentID) {
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: commentID },
    });

    return comment;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function createCommentDB(data) {
  try {
    const comment = await prisma.comment.create({ data });

    return comment;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function editCommentDB(data) {
  try {
    const comment = await prisma.comment.update({
      data,
      where: { id: data.id, postId: data.postId, authorId: data.authorId },
    });

    return { comment };
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function deleteCommentDB(commentID) {}
