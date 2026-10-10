// Modles
import {
  getCommentsDB,
  createCommentDB,
  editCommentDB,
  deleteCommentDB,
} from "../models/commentModel.js";

export async function getComments(req, res, next) {
  const postId = req?.query?.postId;

  const quantity = Number(req?.query?.quantity) ?? 10;

  const cursor =
    req?.query?.cursor === "undefined" ? undefined : req?.query?.cursor;

  try {
    const comments = await getCommentsDB(postId, quantity, cursor);

    res.json({ success: true, ...comments });
  } catch (error) {
    res.json({ success: false, error });
  }
}

export async function createComment(req, res, next) {
  if (!req.user) {
    return res.json({ success: false, error });
  }

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
  if (!req.user) {
    return res.json({ success: false, error });
  }

  const data = {
    id: req?.body?.id,
    postId: req?.body?.postId,
    content: req?.body?.comment,
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
  if (!req.user) {
    return res.json({ success: false });
  }

  const data = {
    id: req?.body?.id,
    postId: req?.body?.postId,
    authorId: req?.body?.authorId,
    requesterId: req?.user?.id,
  };

  if (data.requesterId !== data.authorId) {
    return res.json({ success: false, error: "unauthorize" });
  }

  try {
    const hasDeleted = await deleteCommentDB(data);

    res.json({ success: hasDeleted });
  } catch (error) {
    res.json({ success: false, error });
  }
}
