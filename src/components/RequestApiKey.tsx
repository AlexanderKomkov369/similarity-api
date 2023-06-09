"use client";

import { FC, FormEvent, useState } from "react";
import { toast } from "@/ui/Toast";
import { createApiKey } from "@/helpers/create-api-key";
import { Key } from "lucide-react";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import CopyButton from "@/components/CopyButton";
import { Input } from "@/ui/Input";
import Button from "@/ui/Button";

const RequestApiKey: FC = ({}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsCreating(true);

    try {
      const generatedKey = await createApiKey();
      setApiKey(generatedKey);
    } catch (error) {
      toast({
        type: "error",
        title: "Error",
        message:
          error instanceof Error ? error.message : "Something went wrong...",
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className={"container md:max-w-2xl"}>
      <div className={"flex flex-col items-center gap-6"}>
        <Key className={"mx-auto h-12 w-12 text-gray-400"}></Key>
        <LargeHeading>Request your API key</LargeHeading>
        <Paragraph>You haven&apos;t requested an API key yet.</Paragraph>
      </div>

      <form
        onSubmit={createNewApiKey}
        className={"mt-6 sm:flex sm:items-center"}
        action={"#"}
      >
        <div
          className={"relative rounded-md drop-shadow-md sm:min-w-0 sm:flex-1"}
        >
          {apiKey ? (
            <CopyButton
              type={"button"}
              valueToCopy={apiKey}
              /* eslint-disable-next-line tailwindcss/no-custom-classname */
              className={
                "animate-in fade-in absolute inset-y-0 right-0 duration-300"
              }
            />
          ) : null}
          <Input
            readOnly
            value={apiKey ?? ""}
            placeholder={"Request an API key to display it here!"}
          />
        </div>
        <div
          className={
            "mt-3 flex justify-center sm:ml-4 sm:mt-0 sm:flex-shrink-0"
          }
        >
          <Button disabled={!!apiKey} isLoading={isCreating}>
            Request key
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestApiKey;
