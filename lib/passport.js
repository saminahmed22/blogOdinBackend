import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

// Utils
import { compareHash } from "../crypto/hash.js";
import { getKeys } from "../utils/getKeys.js";

// Models
import { getUserDB } from "../models/userModel.js";

async function verify(payload, done) {
  const userID = payload.sub;

  const user = await getUserDB({ id: userID });

  return done(null, user || false);
}

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: getKeys({ type: "public" }),
  algorithms: ["RS256"],
};

const jwtStrat = new Strategy(options, verify);

passport.use(jwtStrat);
