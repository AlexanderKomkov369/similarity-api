"use client";

import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";

interface ProvidersProps extends PropsWithChildren {}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
      <SessionProvider>
        {/* @ts-expect-error Server Component */}
        <Navbar />
        {children}
      </SessionProvider>
      {/* Allow for more height for mobile devices */}
      <div className={"h-40 md:hidden"} />
    </ThemeProvider>
  );
};

export default Providers;
