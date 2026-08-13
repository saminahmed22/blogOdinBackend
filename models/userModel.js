import { prisma } from "../lib/prisma.js";

export async function getUserDB(userID) {
  try {
    const user = await prisma.user.findUnique({ where: { id: userID } });

    return user;
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
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
  try {
    const user = await prisma.user.update({
      data,
      where: { id: data.id },
    });

    return { user };
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}

export async function deleteUserDB(userID) {
  try {
    const user = await prisma.user.delete({ where: { id: userID } });

    return { Deleted: { user } };
  } catch (error) {
    const errorCode = error.code;

    return new Error(errorCode);
  }
}
