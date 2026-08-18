// Utils
import { compareHash } from "../crypto/hash.js";

export async function verifyPassword(passwordHash, password) {
  try {
    const isValid = await compareHash(passwordHash, password);

    return isValid;
  } catch (error) {
    throw new Error(`Internal server error. ${error}`);
  }
}
