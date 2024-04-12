import { cn } from "@/shared/utils/cn-merge";
import { FC } from "react";

type Props = {
  className: string;
};
// Вход по ссылке - болванка, так как не хочу
// реализовывать функционал отправки email'лов.
// ip серый, деплоить не буду, так что будет так)
const MagicLinkAuthForm: FC<Props> = ({ className }) => {
  return (
    <form className={cn("flex justify-between border rounded-tl-lg rounded-br-lg", className)}>
       <input type="email" placeholder="Введите ваш email" className="bg-transparent px-5 outline-primary" /> 
       <button className="bg-primary text-primary-foreground py-4 px-5 rounded-tl-lg rounded-br-lg outline-foreground shadow">Войти</button>
    </form>
  );
};
export default MagicLinkAuthForm;