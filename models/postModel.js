import { prisma } from "../lib/prisma.js";

// Common objects

const getIncObj = (userId = undefined) => {
  return {
    include: {
      author: true,
      category: true,

      ...(userId
        ? {
            _count: {
              select: {
                bookmarks: { where: { authorId: userId } },
              },
            },

            postVotes: {
              where: { authorId: userId },
              select: { vote: true },
            },
          }
        : {}),
    },
  };
};

// Feed
export async function getPostDB({ userId = null, postId }) {
  try {
    const content = await prisma.post.findUnique({
      where: {
        id: postId,

        ...(userId
          ? { OR: [{ authorId: userId }, { published: true }] }
          : { published: true }),
      },

      ...getIncObj(userId),
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

      ...getIncObj(userId),

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

      ...getIncObj(userId),

      orderBy: { id: "desc" },
    });

    return content;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

// User
export async function getUserPostsDB({
  authorId,
  isAuthor,
  quantity,
  cursor,
  userId,
}) {
  try {
    const content = await prisma.post.findMany({
      take: quantity,
      ...(cursor ? { cursor: { id: cursor } } : {}),
      skip: cursor ? 1 : 0,

      where: { authorId, ...(isAuthor ? {} : { published: true }) },
      orderBy: { id: "desc" },

      ...getIncObj(userId),
    });

    return content;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

// Drafts
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

// Bookmark
export async function getUserBookmarksDB({ userId, quantity, cursor }) {
  try {
    const content = await prisma.bookmark.findMany({
      take: quantity,
      ...(cursor
        ? { cursor: { bookmark_id: { authorId: userId, postId: cursor } } }
        : {}),
      skip: cursor ? 1 : 0,

      where: { authorId: userId },

      include: {
        post: { include: { category: true, author: true } },
      },

      orderBy: { created_at: "desc" },
    });

    return content;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function setUserPostBookmarkDB({ userId, postId }) {
  try {
    const content = await prisma.bookmark.create({
      data: { authorId: userId, postId },
    });

    return content;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function deleteUserPostBookmarkDB({ userId, postId }) {
  try {
    const content = await prisma.bookmark.delete({
      where: {
        bookmark_id: {
          postId,
          authorId: userId,
        },
      },
    });

    return content;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

// Vote
export async function createPostVoteDB({ userId, postId, vote }) {
  try {
    const userVote = await prisma.postVote.findUnique({
      where: {
        vote_id: {
          postId,
          authorId: userId,
        },
      },

      select: {
        vote: true,
      },
    });

    await prisma.post.update({
      where: { id: postId },

      data: {
        totalVote: {
          increment: userVote?.vote ? vote * 2 : vote,
        },
      },
    });

    await prisma.postVote.upsert({
      create: { postId, authorId: userId, vote },
      update: { postId, authorId: userId, vote },

      where: {
        vote_id: {
          postId,
          authorId: userId,
        },
      },
    });

    return true;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function deletePostVoteDB({ userId, postId }) {
  try {
    const userVote = await prisma.postVote.findUnique({
      where: {
        vote_id: {
          postId,
          authorId: userId,
        },
      },

      select: {
        vote: true,
      },
    });

    if (!userVote?.vote) return;

    await prisma.post.update({
      where: { id: postId },

      data: {
        totalVote: {
          decrement: userVote.vote,
        },
      },
    });

    await prisma.postVote.delete({
      where: {
        vote_id: {
          postId,
          authorId: userId,
        },
      },
    });

    return true;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

// export async function getUserBookmarkedPosts({ userId }) {
//   try {
//     const content = await prisma.bookmark.findMany({
//       where: { authorId: userId },
//     });

//     return content;
//   } catch (error) {
//     const errorCode = error.code;

//     return new Error(errorCode);
//   }
// }

//
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
