import { prisma } from "../lib/prisma.js";

export async function getCommentsDB(postId, quantity, cursor) {
  try {
    const comments = await prisma.comment.findMany({
      take: quantity,
      ...(cursor ? { cursor: { id: cursor } } : {}),
      skip: cursor ? 1 : 0,

      where: { postId },

      include: { author: true },

      orderBy: { created_at: "desc" },
    });

    const count = await prisma.comment.count({
      where: { postId: postId },
    });

    return { comments, count };
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

export async function deleteCommentDB(data) {
  try {
    const comment = await prisma.comment.delete({
      where: { id: data.id, authorId: data.authorId, postId: data.postId },
    });

    return true;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}
