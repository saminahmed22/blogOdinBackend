import { argon2id, hash, verify } from "argon2";
import { randomBytes } from "crypto";

export async function hashString(string) {
  if (!string) {
    return new Error("No string has been provided to hash.");
  }

  const options = {
    type: argon2id,
    memoryCost: 65536, // 64 MiB
    timeCost: 3, // 2 passes
    parallelism: 4, // 4 threads
    hashLength: 32, // 32 bytes output
    saltLength: 16,
    salt: randomBytes(16),
  };

  try {
    const hashedString = await hash(string, options);

    return hashedString;
  } catch (error) {
    return new Error(error);
  }
}

export async function compareHash(hash, string) {
  if (!string && !hash) {
    return new Error("No hash or string has been provided.");
  }
  if (!string) {
    return new Error("No string has been provided to compare the hash with.");
  }
  if (!hash) {
    return new Error("No hash has been provided to compare the string with.");
  }

  try {
    const isValid = await verify(hash, string);

    return isValid;
  } catch (error) {
    return new Error(error);
  }
}
