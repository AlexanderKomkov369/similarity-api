"use client";

import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import SimpleBar from "simplebar-react";
import Code from "@/components/Code";
import { nodejsCode, pythonCode } from "@/constants/documentation-code";

interface DocumentationTabsProps {}

enum TabsValue {
  NodeJS = "nodejs",
  Python = "python",
}

const DocumentationTabs: FC<DocumentationTabsProps> = ({}) => {
  return (
    <Tabs defaultValue={TabsValue.NodeJS} className={"w-full max-w-2xl"}>
      <TabsList>
        <TabsTrigger value={TabsValue.NodeJS}>NodeJS</TabsTrigger>
        <TabsTrigger value={TabsValue.Python}>Python</TabsTrigger>
      </TabsList>
      <TabsContent value={TabsValue.NodeJS}>
        <SimpleBar>
          <Code
            code={nodejsCode}
            show
            language={"javascript"}
            animated
            animationSpeed={8}
          />
        </SimpleBar>
      </TabsContent>
      <TabsContent value={TabsValue.Python}>
        <SimpleBar>
          <Code
            code={pythonCode}
            show
            language={"python"}
            animated
            animationSpeed={10}
          />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
