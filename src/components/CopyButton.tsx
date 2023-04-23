"use client";

import { ButtonHTMLAttributes, FC } from "react";
import Button from "@/ui/Button";
import { toast } from "@/ui/Toast";
import { Copy } from "lucide-react";
import { clipboardCopy } from "@/lib/utils";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({
  valueToCopy,
  className,
  ...props
}) => {
  return (
    <Button
      onClick={() => {
        clipboardCopy(valueToCopy);
      }}
      variant={"ghost"}
      className={className}
      {...props}
    >
      <Copy className={"h-5 w-5"} />
    </Button>
  );
};

export default CopyButton;
