import { FC } from "react";
import {
  BookMarkedIcon,
  CircleUserRoundIcon,
  PhoneIcon,
  SettingsIcon,
  UserRoundIcon,
  UsersIcon,
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import MyProfile from "@/features/profile-dialog/ui/my-profile";

type Props = {};

const items: { title: string; icon: JSX.Element, dialog: JSX.Element }[] = [
  {
    title: "Мой профиль",
    icon: <CircleUserRoundIcon strokeWidth={1} />,
    dialog: (
      <MyProfile />
    ),
  },
  {
    title: "Новая группа",
    icon: <UsersIcon strokeWidth={1} />,
    dialog: <br />,
  },
  {
    title: "Контакты",
    icon: <UserRoundIcon strokeWidth={1} />,
    dialog: <br />,
  },
  {
    title: "Звонки",
    icon: <PhoneIcon strokeWidth={1} />,
    dialog: <br />,
  },
  {
    title: "Заметки",
    icon: <BookMarkedIcon strokeWidth={1} />,
    dialog: <br />,
  },
  {
    title: "Настройки",
    icon: <SettingsIcon strokeWidth={1} />,
    dialog: <br />,
  },
];

const MenuList: FC<Props> = ({}) => {
  return (
    <div className="mt-5">
      <ul className="space-y-2.5">
        {items.map((item, index) => (
          <li key={item.title}>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={"ghost"}
                  className="flex gap-2.5 items-center font-normal"
                >
                  {item.icon}
                  <p>{item.title}</p>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[425px] w-fit p-0 border-none bg-transparent outline-none">
                {item.dialog}
              </DialogContent>
            </Dialog>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MenuList;