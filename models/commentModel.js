import { prisma } from "../lib/prisma.js";

export async function getCommentsDB({ postId, userId, quantity, cursor }) {
  try {
    const content = await prisma.comment.findMany({
      take: quantity,
      ...(cursor ? { cursor: { id: cursor } } : {}),
      skip: cursor ? 1 : 0,

      where: {
        postId,

        post: {
          ...(userId
            ? { OR: [{ authorId: userId }, { published: true }] }
            : { published: true }),
        },
      },

      include: { author: true },

      orderBy: { id: "desc" },
    });

    return content;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function getUserCommentsDB({
  authorId,
  userId,
  quantity,
  cursor,
}) {
  try {
    const content = await prisma.comment.findMany({
      take: quantity,
      ...(cursor ? { cursor: { id: cursor } } : {}),
      skip: cursor ? 1 : 0,

      where: {
        authorId,

        post: {
          ...(userId
            ? { OR: [{ authorId: userId }, { published: true }] }
            : { published: true }),
        },
      },

      orderBy: { id: "desc" },

      include: { post: { include: { author: true } }, author: true },
    });

    return content;
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

    return comment;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function deleteCommentDB(data) {
  try {
    await prisma.comment.delete({
      where: { id: data.id, authorId: data.authorId, postId: data.postId },
    });

    return true;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}
