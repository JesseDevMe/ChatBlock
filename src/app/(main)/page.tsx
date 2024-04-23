import ChatsList from "@/features/chats-list/ui/chats-list";
import Menu from "@/features/menu/ui/menu";
import { SessionProvider } from "next-auth/react";

export default async function Home() {
  
  return (
    <main className="p-5 pb-0 h-screen bg-muted ">
      <div className="flex flex-col gap-y-5 w-fit h-full">
        <Menu/>
        <ChatsList/>
      </div>
      
    </main>
  );
}
