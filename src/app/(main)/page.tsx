import Menu from "@/features/menu/ui/menu";

export default async function Home() {
  
  return (
    <main className="p-5 pb-0 h-screen bg-muted ">
      <div className="flex flex-col gap-y-5 w-fit h-full bg-gray-400">
        <Menu/>
      </div>
      
    </main>
  );
}
