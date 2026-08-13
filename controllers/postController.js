// Modles
import {
  getPostDB,
  createPostDB,
  editPostDB,
  deletePostDB,
} from "../models/postModel.js";

export async function getPost(req, res, next) {}

export async function createPost(req, res, next) {
  const data = {
    title: req.body.title,
    description: req.body.description,
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

export async function editPost(req, res, next) {}

export async function deletePost(req, res, next) {}
