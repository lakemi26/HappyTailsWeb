import type { Metadata } from "next";
import { Itim } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const itim = Itim({ subsets:["latin"],
  weight:"400",
})

export const metadata: Metadata = {
  title: "HappyTails",
  description: "HappyTails",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${itim.className} text-white`}>
        <Navbar/>
        {children}</body>
    </html>
  );
}


