// Modles
import {
  getPostDB,
  getPostsDB,
  findPostsDB,
  createPostDB,
  editPostDB,
  deletePostDB,
  getUserPostsDB,
  getUserDraftedPostsDB,
  toggleUserDraftedPostsDB,
  getUserBookmarksDB,
  setUserPostBookmarkDB,
  deleteUserPostBookmarkDB,
} from "../models/postModel.js";

export async function getPost(req, res, next) {
  try {
    const userId = req?.user?.id;
    const postId = req?.params?.postId;

    const content = await getPostDB({ userId, postId });

    res.json({ content });
  } catch (error) {
    res.status(500).json({ error });
  }
}

export async function getPosts(req, res, next) {
  try {
    const userId = req?.user?.id;

    const categoryId =
      req?.query?.categoryId === "undefined"
        ? undefined
        : Number(req?.query?.categoryId);

    const quantity = Number(req?.query?.quantity) ?? 10;

    const cursor =
      req?.query?.cursor === "undefined" ? undefined : req?.query?.cursor;

    const content = await getPostsDB({ userId, categoryId, quantity, cursor });

    res.json({ content });
  } catch (error) {
    res.status(500).json({ error });
  }
}

export async function findPosts(req, res, next) {
  try {
    const searchQueryStr = req?.query?.query;

    if (!searchQueryStr.length) return;

    const searchQueryARR = req?.query?.query?.split(" ");

    const searchQuery = searchQueryARR.filter((word) => word !== "");

    const userId = req?.user?.id;

    const quantity = Number(req?.query?.quantity) ?? 10;

    const cursor =
      req?.query?.cursor === "undefined" ? undefined : req?.query?.cursor;

    const content = await findPostsDB({
      searchQuery,
      userId,
      quantity,
      cursor,
    });

    res.json({ content });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

export async function getUserPosts(req, res, next) {
  const userId = req?.user?.id;
  const authorId = req?.query?.userId;

  let isAuthor = false;
  if (userId) {
    isAuthor = authorId === userId;
  }

  const quantity = Number(req?.query?.quantity) ?? 10;

  const cursor =
    req?.query?.cursor === "undefined" ? undefined : req?.query?.cursor;

  try {
    const content = await getUserPostsDB({
      authorId,
      isAuthor,
      quantity,
      cursor,
      userId,
    });

    res.json({ content });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

export async function getUserBookmarks(req, res, next) {
  const userId = req?.user?.id;

  if (!userId) {
    res.status(401).json({ error: "Not authorized." });
  }

  const quantity = Number(req?.query?.quantity) ?? 10;

  const cursor =
    req?.query?.cursor === "undefined" ? undefined : req?.query?.cursor;

  try {
    const content = await getUserBookmarksDB({
      userId,
      quantity,
      cursor,
    });

    /*

{
    id: '01a15907-6719-767c-83ba-4fa9e1d561e8',
    authorId: '01a15902-30e0-73c9-87a5-6e786ea3dbea',
    title: 'The Great Chocolate Chip Cookie Experiment',
    description: 'Last month I baked six batches of chocolate chip cookies in one weekend, changing just one thing each time. I tried browned butter, a longer rest in the fridge, different sugar ratios, and a sprinkle of flaky salt on top.\n' +
      '\n' +
      'The winner was the batch with browned butter and a full day of chilled dough, which tasted deeply of caramel and toffee. My neighbors were thrilled to help with the testing, and I now have a recipe I will never change.\n' +
      '\n',
    published: true,
    created_at: 2026-10-20T11:16:59.801Z,
    edited_at: 2026-10-20T11:16:59.801Z,
    categoryId: 17,
    totalVote: 0,
    author: {
      id: '01a15902-30e0-73c9-87a5-6e786ea3dbea',
      role: 'general',
      firstName: 'Elena',
      lastName: 'Marchetti',
      username: 'elena',
      profilePictureLink: null,
      bio: 'Travel writer and amateur photographer chasing good light across Europe.',
      joined_at: 2026-10-20T11:11:18.244Z,
      theme_color: '#FFD6E0'
    },
    category: { id: 17, name: 'Cooking', color: '#f8b7aa' },
    bookmarks: [ [Object] ],
    _count: { bookmarks: 1 }
  },

*/

    const refactoredContentArray = [];

    for (const postObj of content) {
      const newObj = { ...postObj.post };

      newObj["author"] = postObj.post.author;

      newObj["category"] = postObj.post.category;

      // Adds _count property for CardActions
      newObj["_count"] = { bookmarks: 1 };

      // Assign newObjt to postObj
      refactoredContentArray.push(newObj);
    }

    res.json({ content: refactoredContentArray });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, error });
  }
}

export async function getUserDraftedPosts(req, res, next) {
  const userId = req?.user?.id;

  if (!userId) {
    res.status(401).json({ error: "Not authorized." });
  }

  const quantity = Number(req?.query?.quantity) ?? 10;

  const cursor =
    req?.query?.cursor === "undefined" ? undefined : req?.query?.cursor;

  try {
    const content = await getUserDraftedPostsDB({
      userId,
      quantity,
      cursor,
    });

    res.json({ content });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

export async function toggleUserDraftedPosts(req, res, next) {
  const userId = req?.user?.id;

  if (!userId) {
    res.status(401).json({ error: "Not authorized." });
  }

  const postId = req?.body?.postId;
  const toggleRequest = req?.body?.toggleRequest;

  try {
    const content = await toggleUserDraftedPostsDB({
      toggleRequest,
      userId,
      postId,
    });

    res.json({ content });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

export async function setUserPostBookmark(req, res, next) {
  const userId = req?.user?.id;

  if (!userId) {
    res.status(401).json({ error: "Not authorized." });
  }

  const postId = req?.body?.postId;

  try {
    const content = await setUserPostBookmarkDB({
      userId,
      postId,
    });

    res.json({ content });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

export async function deleteUserPostBookmark(req, res, next) {
  const userId = req?.user?.id;

  if (!userId) {
    res.status(401).json({ error: "Not authorized." });
  }

  const postId = req?.body?.postId;

  try {
    const content = await deleteUserPostBookmarkDB({
      userId,
      postId,
    });

    res.json({ content });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

//
export async function createPost(req, res, next) {
  const data = {
    title: req?.body?.title,
    description: req?.body?.description,
    authorId: req?.body?.authorId,
    categoryId: Number(req?.body?.categoryId),
    published: req?.body?.published === "true",
  };

  try {
    const post = await createPostDB(data);

    res.json({ post });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

export async function editPost(req, res, next) {
  const data = {
    id: req?.body?.postId,
    authorId: req?.body?.authorId,
    title: req?.body?.title,
    description: req?.body?.description,
    categoryId: Number(req?.body?.categoryId),
    published: req?.body?.published === "true",
  };

  const post = await editPostDB(data);

  if (post instanceof Error) {
    const errorCode = post.message;

    let statusCode, errorMessage;

    switch (errorCode) {
      default:
        statusCode = 500;
        errorMessage = "Unknown error.";
        break;
    }

    res.status(statusCode).json({ error: errorMessage, code: errorCode });
  } else {
    res.json(post);
  }
}

export async function deletePost(req, res, next) {
  const postID = req.params.id;
  const post = await deletePostDB(postID);

  if (post instanceof Error) {
    const errorCode = post.message;

    let statusCode, errorMessage;

    switch (errorCode) {
      default:
        statusCode = 500;
        errorMessage = "Unknown error.";
        break;
    }

    res.status(statusCode).json({ error: errorMessage, code: errorCode });
  } else {
    res.json(post);
  }
}
