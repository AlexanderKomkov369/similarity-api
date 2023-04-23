import { FC } from "react";
import Link from "next/link";
import { buttonVariants } from "@/ui/Button";
import { Icons } from "@/components/Icons";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import UserAuthForm from "@/components/UserAuthForm";

const Page: FC = ({}) => {
  return (
    <div
      className={
        "container absolute inset-0 mx-auto flex h-screen flex-col items-center justify-center"
      }
    >
      <div
        className={
          "mx-auto flex w-full max-w-lg flex-col justify-center space-y-6"
        }
      >
        <div className={"flex flex-col items-center gap-6 text-center"}>
          <Link
            href={"/"}
            className={buttonVariants({ variant: "ghost", className: "w-fit" })}
          >
            <Icons.ChevronLeft className={"mr-2 h-4 w-4"} />
            Back to Home
          </Link>

          <LargeHeading>Welcome Back!</LargeHeading>
          <Paragraph>Please sign in using your google account</Paragraph>

          <UserAuthForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
