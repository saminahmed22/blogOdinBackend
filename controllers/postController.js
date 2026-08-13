// Modles
import {
  getPostDB,
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

export async function createPost(req, res, next) {
  const data = {
    title: req?.body?.title,
    description: req?.body?.description,
    authorId: "019ffbc2-7319-71da-83f3-b271f6a40e7e",
  };

  const post = await createPostDB(data);

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

export async function editPost(req, res, next) {
  const data = {
    id: "3ID7uV_Dpo",
    authorId: "019ffbc2-7319-71da-83f3-b271f6a40e7e",
    title: req?.body?.title,
    description: req?.body?.description,
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
