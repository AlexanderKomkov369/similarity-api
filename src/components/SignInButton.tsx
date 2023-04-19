"use client";

import { FC, useState } from "react";
import Button from "@/ui/Button";
import { signIn } from "next-auth/react";
import { toast } from "@/ui/Toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      setIsLoading(true);
      await signIn("google");
    } catch (error) {
      toast({
        type: "error",
        title: "Error signing in",
        message: "Please try again",
      });
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
