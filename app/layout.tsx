import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suraj | Portfolio",
  description: "Suraj Sachan Portfolio and Developed by Suraj Sachan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ActiveSectionContextProvider>
        {children}
      </ActiveSectionContextProvider>
        </body>
    </html>
  );
}
