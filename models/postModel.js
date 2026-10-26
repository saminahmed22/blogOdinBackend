import { prisma } from "../lib/prisma.js";

// Helper
async function addTotalCountToPostObj({ postId, postObj }) {
  const totalVotes = await getTotalVotes({ postId });

  postObj["totalVotes"] = totalVotes || 0;
}

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

    await addTotalCountToPostObj({ postId, postObj: content });

    return content;
  } catch (error) {
    throw error;
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

    // Adds vote counts for each posts
    for (const post of content) {
      await addTotalCountToPostObj({ postId: post.id, postObj: post });
    }

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
                { plain: { contains: query, mode: "insensitive" } },
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

    // Adds vote counts for each posts
    for (const post of content) {
      await addTotalCountToPostObj({ postId: post.id, postObj: post });
    }

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

    // Adds vote counts for each posts
    for (const post of content) {
      await addTotalCountToPostObj({ postId: post.id, postObj: post });
    }

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

    // Adds vote counts for each posts
    for (const post of content) {
      await addTotalCountToPostObj({ postId: post.id, postObj: post });
    }

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

    // Adds vote counts for each posts
    for (const post of content) {
      await addTotalCountToPostObj({ postId: post.id, postObj: post });
    }

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
export async function getTotalVotes({ postId }) {
  const totalVoteCount = await prisma.postVote.aggregate({
    where: { postId },

    _sum: { vote: true },
  });

  return totalVoteCount._sum.vote;
}

export async function createPostVoteDB({ userId, postId, vote }) {
  try {
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

// Actions
export async function createPostDB(data, userId) {
  try {
    const post = await prisma.post.create({ data, ...getIncObj(userId) });

    post["totalVotes"] = 0;

    return post;
  } catch (error) {
    throw error;
  }
}

export async function editPostDB({ data, postId, userId, timeStamp }) {
  try {
    const post = await prisma.post.upsert({
      where: { id: postId, authorId: userId },

      create: { ...data, authorId: userId, created_at: timeStamp },
      update: { ...data, edited_at: timeStamp },

      ...getIncObj(userId),
    });

    return post;
  } catch (error) {
    throw error;
  }
}

export async function deletePostDB(postId, userId) {
  try {
    const post = await prisma.post.delete({
      where: { id: postId, authorId: userId },
    });

    return true;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}
