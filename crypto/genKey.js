import { generateKeyPairSync } from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

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
  const abPath = path.dirname(fileURLToPath(import.meta.url));
  const keysPath = path.join(abPath, "keys");

  let publicKeyPath, privateKeyPath, publicKey, privateKey;
  switch (type) {
    case "both":
      publicKeyPath = path.join(keysPath, "id_rsa_pub.pem");
      privateKeyPath = path.join(keysPath, "id_rsa_priv.pem");

      publicKey = fs.readFileSync(publicKeyPath, "utf-8");
      privateKey = fs.readFileSync(privateKeyPath, "utf-8");

      return { publicKey, privateKey };

    case "private":
      privateKeyPath = path.join(keysPath, "id_rsa_priv.pem");

      privateKey = fs.readFileSync(privateKeyPath, "utf-8");

      return privateKey;

    case "public":
      publicKeyPath = path.join(keysPath, "id_rsa_pub.pem");
      publicKey = fs.readFileSync(publicKeyPath, "utf-8");

      return publicKey;

    default:
      return new Error(`Invalid type "${type}"`);
  }
}
