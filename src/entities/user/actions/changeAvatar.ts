"use server"

import uploadFile from "@/shared/lib/upload-file";
import { updateUserByEmail } from "@/entities/user/model/index.server";
import { redirect } from "next/navigation";
import { auth } from "@/shared/configs/auth";

async function changeAvatarAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.email) {
    redirect('/auth');
  }

  const file = formData.get("file") as File;
  if (!file) {
    throw Error("no file in Form Data")
  }
  try {
    const fileName = await uploadFile(file);
    const imageUrl = process.env.HOST_URL! + '/upload/' + fileName;
    await updateUserByEmail(session.user.email, {image: imageUrl});
    return imageUrl;
  } catch {
    throw Error ("change avatar action denied");
  }
  
}

export default changeAvatarAction;