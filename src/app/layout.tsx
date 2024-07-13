import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/shared/SideBar";
import ReactQueryProvider from "@/components/provider/ReactQueryProvider";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <SideBar></SideBar>
          <Navbar></Navbar>
          <div className="lg:pl-[21vw] lg:pt-[110px] bg-[#ececec] min-h-screen">
            {children}
          </div>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
