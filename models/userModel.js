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

export async function editUserDB(data) {
  const user = await prisma.user.update({
    data,
    where: { id: data.id },
  });

  return { user };
}

export async function deleteUserDB(userID) {
  const user = await prisma.user.delete({ where: { id: userID } });

  return { Deleted: { user } };
}
//#endregion
