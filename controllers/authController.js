import { verifyPassword } from "../utils/verifyPassword.js";
import { issueJWT } from "../utils/issueJwt.js";

// User controller and models
import { createUser } from "./userController.js";
import { getUserDB } from "../models/userModel.js";

// Login
export async function renderLoginPage(req, res, next) {
  res.render("login");
}

export async function handleLoginRequest(req, res, next) {
  const username = req.body.username;
  const givenPassword = req.body.password;

  try {
    const user = await getUserDB({ username });

    const isValid = await verifyPassword(user.passwordHash, givenPassword);

    if (!isValid) {
      return res.status(401).json({
        success: false,
        message: "Wrong username or password.",
      });
    }

    const payload = {
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      username: user.username,
      role: user.role,
    };

    const jwt = await issueJWT(payload);

    delete user["passwordHash"];

    const response = { user, jwt };

    res.json(response);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
