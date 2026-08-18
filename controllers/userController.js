// Modles
import {
  getUserDB,
  createUserDB,
  editUserDB,
  deleteUserDB,
} from "../models/userModel.js";

// Utils
import { hashString } from "../crypto/hash.js";
import { issueJWT } from "../utils/issueJwt.js";

export async function getUser(req, res, next) {
  const userID = req.params.id;
  const user = await getUserDB({ id: userID });

  if (user instanceof Error) {
    const errorCode = user.message;

    let statusCode, errorMessage;

    switch (errorCode) {
      default:
        statusCode = 500;
        errorMessage = "Unknown error.";
        break;
    }

    res.status(statusCode).json({ error: errorMessage, code: errorCode });
  } else {
    res.json(user);
  }
}

export async function createUser(req, res, next) {
  const givenPassword = req?.body?.password;

  const hashedPassword = await hashString(givenPassword);

  const data = {
    firstName: req?.body?.firstName,
    lastName: req?.body?.lastName,
    username: req?.body?.username,
    bio: req?.body?.bio,
    passwordHash: hashedPassword,
  };

  const user = await createUserDB(data);

  if (user instanceof Error) {
    const errorCode = user.message;

    let statusCode, errorMessage;

    switch (errorCode) {
      case "P2002":
        statusCode = 409;
        errorMessage = "This username is unavailable.";
        break;

      default:
        statusCode = 500;
        errorMessage = "Unknown error.";
        break;
    }

    return res
      .status(statusCode)
      .json({ error: errorMessage, code: errorCode });
  } else {
    const payload = {
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      username: user.username,
      role: user.role,
    };

    const jwtToken = await issueJWT(payload);

    delete user["passwordHash"];

    const response = { userData: user, jwt: jwtToken };

    res.json(response);
  }
}

export async function editUser(req, res, next) {
  const data = {
    id: "019ffbc2-7319-71da-83f3-b271f6a40e7e",
    firstName: req?.body?.firstName,
    lastName: req?.body?.lastName,
    username: req?.body?.username,
    bio: req?.body?.bio,
    passwordHash: req?.body?.passwordHash,
  };

  const user = await editUserDB(data);

  if (user instanceof Error) {
    const errorCode = user.message;

    let statusCode, errorMessage;

    switch (errorCode) {
      default:
        statusCode = 500;
        errorMessage = "Unknown error.";
        break;
    }

    res.status(statusCode).json({ error: errorMessage, code: errorCode });
  } else {
    res.json(user);
  }
}

export async function deleteUser(req, res, next) {
  const userID = req.params.id;
  const user = await deleteUserDB(userID);

  if (user instanceof Error) {
    const errorCode = user.message;

    let statusCode, errorMessage;

    switch (errorCode) {
      default:
        statusCode = 500;
        errorMessage = "Unknown error.";
        break;
    }

    res.status(statusCode).json({ error: errorMessage, code: errorCode });
  } else {
    res.json(user);
  }
}
