import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";
import { Toaster } from "@/ui/Toast";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], preload: true });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body
        className={"min-h-screen bg-slate-50 antialiased dark:bg-slate-900"}
      >
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <Toaster position={"bottom-right"} />

          {children}
        </Providers>
      </body>
    </html>
  );
}
