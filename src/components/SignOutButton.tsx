"use client";

import { FC, useState } from "react";
import Button from "@/ui/Button";
import { signOut } from "next-auth/react";
import { toast } from "@/ui/Toast";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

  const signUserOut = async () => {
    setIsLoading(true);

    try {
      setIsLoading(true);
      await signOut();
    } catch (error) {
      toast({
        type: "error",
        title: "Error signing out",
        message: "Please try again",
      });
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
