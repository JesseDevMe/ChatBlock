import { prisma } from "@/shared/configs/prisma";
import { User } from "./types";

interface UserDTO {
  name?: string
  image?: string
}

export async function updateUserByEmail(email: string, data: UserDTO) {
  const fetchData = await prisma.user.update({
    where: {email: email},
    data: {name: data.name, image: data.image}
  });

  if (!fetchData) {
    throw new Error("update user failed")
  }
}

export async function getUserByEmail(email: string): Promise<User> {
  const data = await prisma.user.findFirst({where: {email: email}});

  if (!data) {
    throw new Error("Not found");
  }

  return {
    name: data.name,
    email: data.email,
    image: data.image || undefined,
  }
}