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
  createPostVoteDB,
  deletePostVoteDB,
} from "../models/postModel.js";

// Gets
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

// Drafts
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

// Bookmark
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

// Votes
export async function createPostVote(req, res, next) {
  const userId = req?.user?.id;

  if (!userId) {
    res.status(401).json({ error: "Not authorized." });
  }

  const postId = req?.body?.postId;

  let givenVote = req?.body?.vote;

  if (typeof givenVote !== "number") {
    res.status(401).json({ error: "Not authorized." });
  }

  const vote =
    givenVote < 1 ? (givenVote / givenVote) * -1 : givenVote / givenVote;

  try {
    const content = await createPostVoteDB({
      userId,
      postId,
      vote,
    });

    res.json({ content });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

export async function deletePostVote(req, res, next) {
  const userId = req?.user?.id;

  if (!userId) {
    res.status(401).json({ error: "Not authorized." });
  }

  const postId = req?.body?.postId;

  try {
    const content = await deletePostVoteDB({
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
