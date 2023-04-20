import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import SimpleBar from "simplebar-react";
import Code from "@/components/Code";
import { nodejsCode } from "@/constants/documentation-code";

interface DocumentationTabsProps {}

enum TabsValue {
  NodeJS = "nodejs",
  Python = "python",
}

const DocumentationTabs: FC<DocumentationTabsProps> = ({}) => {
  return (
    <Tabs defaultValue={TabsValue.NodeJS} className={"max-w-2xl w-full"}>
      <TabsList>
        <TabsTrigger value={TabsValue.NodeJS}>NodeJS</TabsTrigger>
        <TabsTrigger value={TabsValue.Python}>Python</TabsTrigger>
      </TabsList>
      <TabsContent value={TabsValue.NodeJS}>
        {/*<SimpleBar></SimpleBar>*/}
        <Code code={nodejsCode} show language={"javascript"} />
      </TabsContent>
      <TabsContent value={TabsValue.Python}></TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
