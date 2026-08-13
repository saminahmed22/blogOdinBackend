import { prisma } from "../lib/prisma.js";

//#region User CURD
export async function getUserDB(userID) {
  const user = await prisma.user.findUnique({ where: { id: userID } });

  return user;
}
//#endregion
