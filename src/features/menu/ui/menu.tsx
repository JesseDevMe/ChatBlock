import Logo from "@/shared/ui/Logo";
import { Button } from "@/shared/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet"
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

type Props = {};

const Menu: FC<Props> = ({}) => {
  return (
    <div className="py-5 pl-4 pr-6 bg-background rounded-lg shadow flex justify-between items-center gap-7">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost"><MenuIcon className="text-muted-foreground"/></Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
            <div>lul</div>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <Link href={'/'}><Logo width={126} height={26}/></Link>
    </div>
  );
};
export default Menu;