import pkg from "jsonwebtoken";
const { sign } = pkg;

import { getKeys } from "./getKeys.js";

export async function issueJWT(payload) {
  const date = new Date();
  const currentDate = date.getTime();
  const expiryDate = currentDate + 432000;

  payload.iat = currentDate;
  payload.exp = expiryDate;

  const privateKey = getKeys({ type: "private" });

  const singedToken = sign(payload, privateKey, { algorithm: "RS256" });

  return {
    token: `Bearer ${singedToken}`,
    expiresIn: payload.exp,
  };
}
