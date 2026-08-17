import { verify } from "../lib/passport.js";
import { issueJWT } from "../models/authModel.js";

// Models
import { getUserDB } from "../models/userModel.js";

// Login
export async function renderLoginPage(req, res, next) {
  res.render("login");
}

export async function handleLoginRequest(req, res, next) {
  const givenPassword = req.body.password;
  const isValid = verify(givenPassword);

  if (!isValid) {
    return res.redirect("/auth/login");
  }

  const username = req.body.username;

  const user = await getUserDB({ username });

  const date = new Date();
  const currentDate = date.getTime();
  const expiryDate = currentDate + 432000;

  const payload = {
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    username: user.username,
    role: user.role,
    iat: currentDate,
    exp: expiryDate,
  };

  const jwtToken = await issueJWT(payload);

  console.log(jwtToken);
  next();
}

// Register
export async function renderRegisterPage(req, res, next) {
  res.render("register");
}

export async function handleRegisterRequest(req, res, next) {
  console.log(req.body);

  res.redirect("/");
}
