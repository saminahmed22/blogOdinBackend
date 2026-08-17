import { generateKeyPairSync } from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

function generateKeyPair() {
  const keyPair = generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  });

  const abPath = path.dirname(fileURLToPath(import.meta.url));
  const keysPath = path.join(abPath, "keys");
  const publicKeyPath = path.join(keysPath, "id_rsa_pub.pem");
  const privateKeyPath = path.join(keysPath, "id_rsa_priv.pem");

  // Write public key file
  fs.writeFileSync(publicKeyPath, keyPair.publicKey);

  // Write privet key file
  fs.writeFileSync(privateKeyPath, keyPair.privateKey);
}

/**
 * @param {Object} options "public", "private", or "both".
 * @param {"public" | "private" | "both"} [options.type="public"] Selects the type "public" by default if no other option is selected.
 * @returns {String | {public: String, private: String}} Returns either or both the public or the private key.
 */
export function getKeys({ type = "public" } = {}) {
  let publicKeyBase64, privateKeyBase64, publicKey, privateKey;

  switch (type) {
    case "both":
      publicKeyBase64 = process.env.JWT_PUBLIC_KEY;
      privateKeyBase64 = process.env.JWT_PRIVATE_KEY;

      publicKey = Buffer.from(publicKeyBase64, "base64").toString();
      privateKey = Buffer.from(privateKeyBase64, "base64").toString();

      return { publicKey, privateKey };

    case "private":
      privateKeyBase64 = process.env.JWT_PRIVATE_KEY;
      privateKey = Buffer.from(privateKeyBase64, "base64").toString();

      return privateKey;

    case "public":
      publicKeyBase64 = process.env.JWT_PUBLIC_KEY;
      publicKey = Buffer.from(publicKeyBase64, "base64").toString();

      return publicKey;

    default:
      return new Error(`Invalid type "${type}".`);
  }
}
