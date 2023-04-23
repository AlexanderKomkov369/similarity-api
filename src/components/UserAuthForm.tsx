"use client";

import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import Button from "@/ui/Button";
import { signIn } from "next-auth/react";
import { toast } from "@/ui/Toast";
import { Svg } from "@/components/Icons";

const UserAuthForm: FC = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        type: "error",
        title: "Error",
        message: "There was an error loggin in",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-center")}>
      <Button
        onClick={loginWithGoogle}
        isLoading={isLoading}
        className={"max-w-sm w-full"}
      >
        {isLoading ? null : Svg.googleLogo}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
