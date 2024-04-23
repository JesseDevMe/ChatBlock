"use server"
import { updateUserByEmail } from "@/entities/user/model/index.server";
import { auth } from "@/shared/configs/auth";
import { redirect } from "next/navigation";

async function updateUserName(newName: string) {
  const session = await auth();
  if (!session?.user?.email) {
    redirect('/auth');
  }

  await updateUserByEmail(session.user.email, {name: newName})
}

export default updateUserName;