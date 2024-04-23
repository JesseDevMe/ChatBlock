"use server"

import { redirect } from "next/navigation";
import { getUserByEmail } from "../model/index.server";
import { auth } from "@/shared/configs/auth";

async function getUserAction() {
  const session = await auth();
  if (!session?.user?.email) {
    redirect('/auth');
  }

  return await getUserByEmail(session.user.email);
}

export default getUserAction;