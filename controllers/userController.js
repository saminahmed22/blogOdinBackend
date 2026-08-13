// Modles
import {
  getUserDB,
  createUserDB,
  editUserDB,
  deleteUserDB,
} from "../models/userModel.js";

//#region User CURD
export async function getUser(req, res, next) {
  const userID = req.params.id;
  const user = await getUserDB(userID);

  res.json(user);
}

export async function createUser(req, res, next) {
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    bio: req.body.bio,
    passwordHash: req.body.passwordHash,
  };

  const user = await createUserDB(data);

  if (user instanceof Error) {
    const errorCode = user.message;

    res
      .status(409)
      .json({ error: "This username is unavailbale.", code: user.message });
  } else {
    res.json(user);
  }
}

export async function editUser(req, res, next) {
  const data = {
    id: "019ffba7-8ebd-74c3-a07a-72a145fc66c0",
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    bio: req.body.bio,
    passwordHash: req.body.passwordHash,
  };

  const user = await editUserDB(data);

  res.json(user);
}

export async function deleteUser(req, res, next) {
  const userID = req.params.id;
  const user = await deleteUserDB(userID);

  res.json(user);
}
//#endregion
