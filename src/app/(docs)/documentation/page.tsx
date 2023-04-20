import { FC } from "react";
import { Metadata } from "next";
import LargeHeading from "@/ui/LargeHeading";
import DocumentationTabs from "@/components/DocumentationTabs";
import Paragraph from "@/ui/Paragraph";

import "simplebar-react/dist/simplebar.min.css";

export const metadata: Metadata = {
  title: "Similarity API | Home",
  description: "Free & open-source text similarity API",
};

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className={"container mx-auto pb-12 mt-12 max-w-7xl"}>
      <div className={"flex flex-col items-center gap-6"}>
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  );
};

export default Page;
