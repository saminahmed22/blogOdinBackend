import pkg from "jsonwebtoken";
const { sign, verify } = pkg;

export async function issueJWT(payload) {
  const privateKey = getKeys({ type: "private" });

  const token = sign(payload, privateKey, { algorithm: "RS256" });

  return token;
}

export function verifyJWT(token) {
  const publicKey = getKeys({ type: "public" });

  const isValid = verify(
    token,
    publicKey,
    { algorithms: ["RS256"] },
    (err, payload) => {
      console.log(err ? err : payload);
    },
  );
}
