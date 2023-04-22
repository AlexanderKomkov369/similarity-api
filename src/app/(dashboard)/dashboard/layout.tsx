import { FC, PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <section className={"pt-20"}>{children}</section>;
};

export default Layout;
