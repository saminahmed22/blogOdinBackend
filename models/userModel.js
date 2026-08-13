import { prisma } from "../lib/prisma.js";

//#region User CURD
export async function getUserDB(userID) {
  const user = await prisma.user.findUnique({ where: { id: userID } });

  return user;
}

export async function createUserDB(data) {
  try {
    const user = await prisma.user.create({ data });

    return { user };
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}
//#endregion
