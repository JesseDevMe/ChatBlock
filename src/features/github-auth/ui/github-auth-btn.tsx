import React, { FC } from "react";
import { Button, ButtonProps } from "@/shared/ui/button";
import { signIn } from "@/shared/configs/auth";
import { cn } from "@/shared/utils/cn-merge";

const GitHubAuthBtn: FC<ButtonProps> = ({ children, className, variant, size, ...props }) => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <Button
        type="submit"
        variant={variant}
        size={size}
        className={cn("", className)}
        {...props}
      >
        {children}
      </Button>
    </form>
  );
};
export default GitHubAuthBtn;
