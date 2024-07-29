import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { PrincipalMenu } from "@/components/navs/PrincipalMenu";

const siliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VirtualDream | Home",
  description: "transform your digital presence, we do it for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-siliguri ${siliguri.className} bg-darkMode`}>
        <PrincipalMenu />
        {children}
      </body>
    </html>
  );
}
