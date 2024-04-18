import Image from "next/image";
import { FC } from "react";
import dicaprioImg from "@/../public/mock/dicaprio.jpg"
import { Button } from "@/shared/ui/button";

type Props = {};

const MyProfile: FC<Props> = ({}) => {
  return (
    <div>
      <div className="relative aspect-video flex flex-col justify-end gap-2.5">
        <Image fill className="object-cover pointer-events-none -z-10" draggable={false} src={dicaprioImg} alt="Аватарка"/>
        <div className="p-5 text-primary-foreground">
          <p className="text-2xl font-medium">Erick Nash</p>
          <p className="text-xs font-light">online</p>
        </div>
      </div>
      <div className="bg-background p-5">
        <p className="font-medium">Аккаунт</p>
        <form className="mt-5 flex flex-col">
          <div className="border-b">
            <p className="text-xs text-muted-foreground">Почта</p>
            <input className="bg-transparent p-2.5 w-full" value={"voiceangel52@gmail.com"} type="email" />
          </div>
          <div className="border-b mt-2.5">
            <p className="text-xs text-muted-foreground">Имя</p>
            <input className="bg-transparent p-2.5 w-full" value={"Erick Nash"} type="email" />
          </div>
          <Button className="mt-5 self-end">Сохранить</Button>
        </form>
      </div>
    </div>
    
  );
};
export default MyProfile;