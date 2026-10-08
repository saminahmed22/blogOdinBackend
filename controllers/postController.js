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
  const postID = req.params.id;
  const post = await getPostDB(postID);

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

export async function getPosts(req, res, next) {
  const categoryIdNum = Number(req?.params?.category);

  const categoryId = categoryIdNum >= 1 ? categoryIdNum : undefined;

  const quantity = Number(req?.params?.quantity) ?? 10;

  const index = Number(req?.params?.index);

  const posts = await getPostsDB(categoryId, quantity, index);

  res.json(posts);
}

export async function findPosts(searchQuery) {
  const posts = await findPostsDB(searchQuery);

  return posts;
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
