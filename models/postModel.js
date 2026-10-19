import { prisma } from "../lib/prisma.js";

export async function getPostDB({ userId = null, postId }) {
  try {
    const content = await prisma.post.findUnique({
      where: {
        id: postId,
        ...(userId
          ? { OR: [{ authorId: userId }, { published: true }] }
          : { published: true }),
      },

      include: { author: true, category: true },
    });

    return content;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function getPostsDB({ userId, categoryId, quantity, cursor }) {
  try {
    const content = await prisma.post.findMany({
      take: quantity,
      ...(cursor ? { cursor: { id: cursor } } : {}),
      skip: cursor ? 1 : 0,

      where: {
        categoryId,

        OR: [
          ...(userId
            ? [{ authorId: userId }, { published: true }]
            : [{ published: true }]),
        ],
      },

      include: { author: true, category: true },

      orderBy: { id: "desc" },
    });

    return content;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function findPostsDB({
  searchQuery = [],
  userId,
  quantity,
  cursor,
}) {
  try {
    const content = await prisma.post.findMany({
      take: quantity,
      ...(cursor ? { cursor: { id: cursor } } : {}),
      skip: cursor ? 1 : 0,

      where: {
        AND: [
          {
            AND: searchQuery.map((query) => ({
              OR: [
                { title: { contains: query, mode: "insensitive" } },
                { description: { contains: query, mode: "insensitive" } },
                {
                  author: {
                    OR: [
                      { firstName: { contains: query, mode: "insensitive" } },
                      { lastName: { contains: query, mode: "insensitive" } },
                    ],
                  },
                },
              ],
            })),
          },

          {
            OR: userId
              ? [{ authorId: userId }, { published: true }]
              : [{ published: true }],
          },
        ],
      },

      include: { author: true, category: true },

      orderBy: { id: "desc" },
    });

    return content;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function getUserPostsDB({ authorId, isAuthor, quantity, cursor }) {
  try {
    const content = await prisma.post.findMany({
      take: quantity,
      ...(cursor ? { cursor: { id: cursor } } : {}),
      skip: cursor ? 1 : 0,

      where: { authorId, ...(isAuthor ? {} : { published: true }) },
      orderBy: { id: "desc" },

      include: { author: true, category: true },
    });

    return content;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function getUserDraftedPostsDB({ userId, quantity, cursor }) {
  try {
    const content = await prisma.post.findMany({
      take: quantity,
      ...(cursor ? { cursor: { id: cursor } } : {}),
      skip: cursor ? 1 : 0,

      where: { authorId: userId, published: false },
      orderBy: { id: "desc" },

      include: { author: true, category: true },
    });

    return content;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function toggleUserDraftedPostsDB({
  toggleRequest,
  userId,
  postId,
}) {
  try {
    const content = await prisma.post.update({
      data: { published: toggleRequest },

      where: { id: postId, authorId: userId },
    });

    return content;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

//
export async function createPostDB(data) {
  try {
    const post = await prisma.post.create({ data });

    return post;
  } catch (error) {
    console.log(error);
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
