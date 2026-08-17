import passport from "passport";

// Utils
import { compareHash } from "../crypto/hash.js";

// Models
import { getUserDB } from "../models/userModel.js";

export async function verify(username, password, done) {
  if (!username && !password) {
    return new Error("No username and password has been provided.");
  }

  if (!username) {
    return new Error("No username has been provided.");
  }

  if (!password) {
    return new Error("No password has been provided.");
  }

  try {
    const user = await getUserDB({ username });

    if (!user) {
      return `done(null, false, { message: "Invalid username or password." });`;
    }

    const isValid = await compareHash(user.passwordHash, password);

    if (isValid) {
      // done(null, user);
      return true;
    } else {
      // return done(null, false, { message: "Invalid username or password." });
      return false;
    }
  } catch (error) {
    return `done(error, { message: "An error occured." });`;
  }
}
