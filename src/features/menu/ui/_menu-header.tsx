import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";

type Props = {};

const MenuHeader: FC<Props> = ({}) => {
  return (
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
  );
};
export default MenuHeader;
