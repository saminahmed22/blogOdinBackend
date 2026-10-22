// Modles
import {
  getCommentsDB,
  getUserCommentsDB,
  createCommentDB,
  editCommentDB,
  deleteCommentDB,
} from "../models/commentModel.js";

export async function getComments(req, res, next) {
  const userId = req?.user?.id;

  const postId = req?.query?.postId;

  const quantity = Number(req?.query?.quantity) ?? 10;

  const cursor =
    req?.query?.cursor === "undefined" ? undefined : req?.query?.cursor;

  try {
    const content = await getCommentsDB({ postId, userId, quantity, cursor });

    res.json({ content });
  } catch (error) {
    res.json({ error });
  }
}

export async function getUserComments(req, res, next) {
  const userId = req?.user?.id;

  const authorId = req?.query?.userId;

  const quantity = Number(req?.query?.quantity) ?? 10;

  const cursor =
    req?.query?.cursor === "undefined" ? undefined : req?.query?.cursor;

  try {
    const content = await getUserCommentsDB({
      authorId,
      userId,
      quantity,
      cursor,
    });

    res.json({ content });
  } catch (error) {
    res.status(500).json({ error });
  }
}

export async function createComment(req, res, next) {
  const authorId = req?.user?.id;

  if (!authorId) {
    return res.status(401).json({ error: "Not authorized." });
  }

  const data = {
    authorId,
    content: req?.body?.comment,
    postId: req?.body?.postId,
  };

  try {
    const comment = await createCommentDB(data);

    res.json({ comment });
  } catch (error) {
    res.json({ success: false, error });
  }
}

export async function editComment(req, res, next) {
  const userId = req?.user?.id;

  if (!userId) {
    return res.status(401).json({ error: "Not authorized." });
  }

  const data = {
    id: req?.body?.id,
    postId: req?.body?.postId,
    content: req?.body?.comment,
    authorId: req?.body?.authorId,
    requesterId: userId,
  };

  if (data.requesterId !== data.authorId) {
    return res.json({ success: false, error: "unauthorize" });
  }

  try {
    const comment = await editCommentDB(data);

    res.json({ comment });
  } catch (error) {
    res.json({ error });
  }
}

export async function deleteComment(req, res, next) {
  const userId = req?.user?.id;

  if (!userId) {
    return res.status(401).json({ error: "Not authorized." });
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
