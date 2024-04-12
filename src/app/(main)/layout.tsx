import { auth } from "@/shared/configs/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  if (!session) {
    redirect('/auth')
  }

  return (
    <>{children}</>
  )
}
