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
