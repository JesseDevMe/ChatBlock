import { FC } from "react";
import Image from "next/image";
import { cn } from "../utils/cn-merge";
import logoImg from "@/../public/logo.svg"

type Props = {
  className?: string;
  width?: number;
  height?: number;
};

const Logo: FC<Props> = ({ className, width = 126, height = 26 }) => {
  return (
    <Image className={cn("", className)} alt="Логотип" width={width} height={height} src={logoImg}/>
  );
};
export default Logo;