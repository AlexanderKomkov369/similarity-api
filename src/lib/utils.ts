import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "@/ui/Toast";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function clipboardCopy(value: string) {
  navigator.clipboard.writeText(value);

  toast({
    type: "success",
    title: "Copied!",
    message: "API key copied to clipboard",
  });
}
