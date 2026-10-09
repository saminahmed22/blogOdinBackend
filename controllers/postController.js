// Modles
import {
  getPostDB,
  getPostsDB,
  findPostsDB,
  createPostDB,
  editPostDB,
  deletePostDB,
} from "../models/postModel.js";

export async function getPost(req, res, next) {
  try {
    const postID = req.params.id;
    const post = await getPostDB(postID);

    res.json({ success: true, post: { ...post } });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

export async function getPosts(req, res, next) {
  try {
    const categoryId =
      req?.query?.categoryId === "undefined"
        ? undefined
        : Number(req?.query?.categoryId);

    const quantity = Number(req?.query?.quantity) ?? 10;

    const cursor =
      req?.query?.cursor === "undefined" ? undefined : req?.query?.cursor;

    const posts = await getPostsDB(categoryId, quantity, cursor);

    res.json({ success: true, ...posts });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

export async function findPosts(req, res, next) {
  try {
    const query = req?.query?.query;

    if (!query.length) return;

    const quantity = Number(req?.query?.quantity) ?? 10;

    const cursor =
      req?.query?.cursor === "undefined" ? undefined : req?.query?.cursor;

    const posts = await findPostsDB(query, quantity, cursor);

    res.json({ success: true, ...posts });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

export async function createPost(req, res, next) {
  const data = {
    title: req?.body?.title,
    description: req?.body?.description,
    authorId: req?.body?.authorId,
    categoryId: Number(req?.body?.categoryId),
    published: req?.body?.published === "true",
  };

  const post = await createPostDB(data);

  if (post instanceof Error) {
    const errorCode = post.message;

    res.json({ error: errorCode });
  } else {
    res.json(post);
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
