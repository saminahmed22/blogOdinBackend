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
