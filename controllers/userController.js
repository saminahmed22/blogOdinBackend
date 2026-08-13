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

//#endregion
