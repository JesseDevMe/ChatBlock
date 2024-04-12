import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import github from "next-auth/providers/github"
import { prisma } from "./prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {strategy: "jwt"},
  providers: [github],
  pages: {
    signIn: "/auth",
  },
})