import GitHubAuthBtn from "@/features/github-auth/ui/github-auth-btn";
import MagicLinkAuthForm from "@/features/magiclink-auth/ui/magiclink-auth-form";
import { Github } from "lucide-react";
import { FC } from "react";
import Image from "next/image";
import logoImg from "@/../public/logo.svg"

type Props = {};

const AuthPage: FC<Props> = ({}) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative p-16 shadow-inner rounded-lg max-w-[730px] w-full h-[500px]">
        <div className="w-[400px] m-auto text-center">
          <h1 className="text-xl">Вход</h1>
          <p className="mt-7 text-muted-foreground">
            Войдите в ваш аккаунт. А если его пока нет - <br />
            создадим.
          </p>
          <GitHubAuthBtn
            variant={"outline"}
            className="py-7 px-10 mt-10 shadow w-[300px]"
          >
            <span>Войти с помощью GitHub</span>
            <Github className="ml-2.5" strokeWidth={1} />
          </GitHubAuthBtn>
          <p className="text-muted-foreground mt-7">или</p>
          <MagicLinkAuthForm className="mt-7 w-[300px] mx-auto" />
          <Image className="absolute right-[100px] bottom-9" alt="Логотип" width={126} height={26} src={logoImg}/>
        </div>
      </div>
    </div>
  );
};
export default AuthPage;
