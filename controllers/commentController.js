// Modles
import {
  getCommentsDB,
  createCommentDB,
  editCommentDB,
  deleteCommentDB,
} from "../models/commentModel.js";

export async function getComments(req, res, next) {
  const postID = req.params.postId;

  try {
    const comments = await getCommentsDB(postID);

    res.json({ success: true, comments: { ...comments } });
  } catch (error) {
    res.json({ success: false, error });
  }
}

export async function createComment(req, res, next) {
  const data = {
    content: req?.body?.comment,
    postId: req?.body?.postId,
    authorId: req?.user?.id,
  };

  try {
    const newComment = await createCommentDB(data);

    res.json({ success: true, comment: { ...newComment } });
  } catch (error) {
    res.json({ success: false, error });
  }
}

export async function editComment(req, res, next) {
  const data = {
    id: req?.body?.id,
    postId: req?.body?.postId,
    content: req?.body?.content,
    authorId: req?.body?.authorId,
    requesterId: req?.user?.id,
  };

  if (data.requesterId !== data.authorId) {
    return res.json({ success: false, error: "unauthorize" });
  }

  try {
    const comment = await editCommentDB(data);

    res.json({ success: true, ...comment });
  } catch (error) {
    res.json({ success: false, error });
  }
}

export async function deleteComment(req, res, next) {
  const commentID = req.params.id;
  const comment = await deleteCommentDB(commentID);

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
