// Modles
import {
  getCommentDB,
  createCommentDB,
  editCommentDB,
  deleteCommentDB,
} from "../models/commentModel.js";

export async function getComment(req, res, next) {
  const commentID = req.params.id;
  const comment = await getCommentDB(commentID);

  if (comment instanceof Error) {
    const errorCode = comment.message;

    let statusCode, errorMessage;

    switch (errorCode) {
      default:
        statusCode = 500;
        errorMessage = "Unknown error.";
        break;
    }

    res.status(statusCode).json({ error: errorMessage, code: errorCode });
  } else {
    res.json(comment);
  }
}

export async function createComment(req, res, next) {
  const data = {
    content: req?.body?.content,
    postId: "3ID7uV_Dpo",
    authorId: "019ffbc2-7319-71da-83f3-b271f6a40e7e",
  };

  const comment = await createCommentDB(data);

  if (comment instanceof Error) {
    const errorCode = comment.message;

    let statusCode, errorMessage;

    switch (errorCode) {
      default:
        statusCode = 500;
        errorMessage = "Unknown error.";
        break;
    }

    res.status(statusCode).json({ error: errorMessage, code: errorCode });
  } else {
    res.json(comment);
  }
}

export async function editComment(req, res, next) {
  const data = {
    id: "Hp7gQVr9-2",
    authorId: "019ffbc2-7319-71da-83f3-b271f6a40e7e",
    postId: "3ID7uV_Dpo",
    content: req?.body?.content,
  };

  const comment = await editCommentDB(data);

  if (comment instanceof Error) {
    const errorCode = comment.message;

    let statusCode, errorMessage;

    switch (errorCode) {
      default:
        statusCode = 500;
        errorMessage = "Unknown error.";
        break;
    }

    res.status(statusCode).json({ error: errorMessage, code: errorCode });
  } else {
    res.json(comment);
  }
}

export async function deleteComment(req, res, next) {}
