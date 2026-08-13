import { prisma } from "../lib/prisma.js";

export async function getPostDB(postID) {}

export async function createPostDB(data) {
  try {
    const post = await prisma.post.create({ data });

    return post;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function editPostDB(data) {}

export async function deletePostDB(postID) {}
