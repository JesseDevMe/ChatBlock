import MyProfile from "@/features/profile-dialog/ui/my-profile";
import Logo from "@/shared/ui/Logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/shared/ui/sheet"
import { BookMarkedIcon, CircleUserRoundIcon, MenuIcon, PhoneIcon, SettingsIcon, UserRoundIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const items: {title: string, icon: JSX.Element}[] = [
  {
    title: 'Мой профиль',
    icon: <CircleUserRoundIcon strokeWidth={1}/>
  },
  {
    title: 'Новая группа',
    icon: <UsersIcon strokeWidth={1}/>
  },
  {
    title: 'Контакты',
    icon: <UserRoundIcon strokeWidth={1}/>
  },
  {
    title: 'Звонки',
    icon: <PhoneIcon strokeWidth={1}/>
  },
  {
    title: 'Заметки',
    icon: <BookMarkedIcon strokeWidth={1}/>
  },
  {
    title: 'Настройки',
    icon: <SettingsIcon strokeWidth={1}/>
  },
]

type Props = {};

const Menu: FC<Props> = ({}) => {
  return (
    <div className="py-3.5 pl-4 pr-6 bg-background rounded-lg shadow flex justify-between items-center gap-5">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost"><MenuIcon className="text-muted-foreground"/></Button>
        </SheetTrigger>
        <SheetContent side={'left'} className="max-w-[85%] w-fit sm:min-w-[260px]">
            <div className="px-2.5 py-5 border-b border-muted truncate">
              <Avatar className="size-[50px]">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="mt-2.5 space-y-1">
                <p>Eric Nash</p>
                <p className="text-muted-foreground">voiceangel52@gmail.com</p>
              </div>
            </div>
            <div className="mt-5">
              <ul className="space-y-2.5">
                {items.map((item, index) =>
                  <li key={item.title}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant={'ghost'} className="flex gap-2.5 items-center font-normal">
                          {item.icon}
                          <p>{item.title}</p>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] sm:rounded-bl-[50px] p-0 overflow-hidden border-none bg-transparent">
                        <MyProfile/>
                      </DialogContent>
                    </Dialog>

                  </li>
                )}
              </ul>
            </div>
        </SheetContent>
      </Sheet>
      <Link href={'/'}><Logo width={126} height={26}/></Link>
    </div>
  );
};
export default Menu;