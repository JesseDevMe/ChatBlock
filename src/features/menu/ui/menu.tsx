import Logo from "@/shared/ui/Logo";
import { Button } from "@/shared/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import MenuHeader from "./_menu-header";
import MenuList from "./_menu-list";

type Props = {};

const Menu: FC<Props> = ({}) => {
  return (
    <div className="py-3.5 pl-4 pr-6 bg-background rounded-lg shadow flex justify-between items-center gap-5">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <MenuIcon className="text-muted-foreground" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="max-w-[85%] w-fit sm:min-w-[260px]"
        >
          <MenuHeader />
          <MenuList />
        </SheetContent>
      </Sheet>
      <Link href={"/"}>
        <Logo width={126} height={26} />
      </Link>
    </div>
  );
};
export default Menu;
