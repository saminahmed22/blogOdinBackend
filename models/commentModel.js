import { prisma } from "../lib/prisma.js";

export async function getCommentsDB(postId) {
  try {
    const comments = await prisma.comment.findMany({
      where: { postId },
      include: { author: true },
      orderBy: { created_at: "desc" },
    });

    return comments;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function createCommentDB(data) {
  try {
    const comment = await prisma.comment.create({
      data,
      include: { author: true },
    });

    return comment;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function editCommentDB(data) {
  try {
    const comment = await prisma.comment.update({
      data: { content: data.content },
      where: { id: data.id, postId: data.postId, authorId: data.requesterId },
    });

    return { comment };
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function deleteCommentDB(commentID) {
  try {
    // TODO: Add author ID check
    const comment = await prisma.comment.delete({ where: { id: commentID } });

    return { Deleted: { comment } };
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}
