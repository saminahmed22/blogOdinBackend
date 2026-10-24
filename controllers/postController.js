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
    return res.status(401).json({ error: "Not authorized." });
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
    return res.status(401).json({ error: "Not authorized." });
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
    return res.status(401).json({ error: "Not authorized." });
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

    if (content.length >= 1) {
      for (const postObj of content) {
        const newObj = { ...postObj.post };

        newObj["author"] = postObj.post.author;

        newObj["category"] = postObj.post.category;

        // Adds _count property for CardActions
        newObj["_count"] = { bookmarks: 1 };

        // Assign newObjt to postObj
        refactoredContentArray.push(newObj);
      }
    }

    res.json({ content: refactoredContentArray });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

export async function setUserPostBookmark(req, res, next) {
  const userId = req?.user?.id;

  if (!userId) {
    return res.status(401).json({ error: "Not authorized." });
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
    return res.status(401).json({ error: "Not authorized." });
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
    return res.status(401).json({ error: "Not authorized." });
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
    return res.status(401).json({ error: "Not authorized." });
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
  const userId = req?.user?.id;

  if (!userId) {
    return res.status(401).json({ error: "Not authorized." });
  }

  const data = {
    title: req?.body?.title,
    ops: req?.body?.ops,
    plain: req?.body?.plain,
    authorId: userId || req?.body?.authorId, //Remove body option
    categoryId: Number(req?.body?.categoryId),
    published: req?.body?.published,
  };

  try {
    const content = await createPostDB(data, userId);

    res.json({ content });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

export async function editPost(req, res, next) {
  const userId = req?.user?.id;

  if (!userId) {
    return res.status(401).json({ error: "Not authorized." });
  }

  const postId = req?.body?.postId;

  const timeStamp = new Date();

  const data = {
    title: req?.body?.title,
    ops: req?.body?.ops,
    plain: req?.body?.plain,
    categoryId: Number(req?.body?.categoryId),
    published: req?.body?.published,
  };

  try {
    const content = await editPostDB({ data, postId, userId, timeStamp });

    res.json({ content });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

export async function deletePost(req, res, next) {
  const userId = req?.user?.id;

  if (!userId) {
    return res.status(401).json({ error: "Not authorized." });
  }

  const postID = req?.body?.postId;

  try {
    await deletePostDB(postID, userId);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}
