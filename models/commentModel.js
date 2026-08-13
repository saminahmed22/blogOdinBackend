import { prisma } from "../lib/prisma.js";

export async function getCommentDB(commentID) {}

export async function createCommentDB(data) {
  try {
    const comment = await prisma.comment.create({ data });

    return comment;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function editCommentDB(data) {}

export async function deleteCommentDB(commentID) {}
