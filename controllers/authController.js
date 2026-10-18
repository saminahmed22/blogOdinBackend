import { verifyPassword } from "../utils/verifyPassword.js";
import { issueJWT } from "../utils/issueJwt.js";

// User controller and models
import { getUserDB } from "../models/userModel.js";

export async function handleLoginRequest(req, res, next) {
  const username = req.body.username;
  const givenPassword = req.body.password;

  try {
    const user = await getUserDB({ username });

    if (!user) {
      return res.status(401).json({
        message: "!credit",
      });
    }

    const isValid = await verifyPassword(user.passwordHash, givenPassword);

    if (!isValid) {
      return res.status(401).json({
        message: "!credit",
      });
    }

    const payload = {
      sub: user.id,
      name: `${user.firstName} ${user.lastName}`,
      username: user.username,
      role: user.role,
    };

    const jwt = await issueJWT(payload);

    delete user["passwordHash"];

    const response = { user, jwt };

    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: "error" });
  }
}
