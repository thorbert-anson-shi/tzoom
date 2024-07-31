import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter_bold = Inter({ subsets: ["latin"], weight: "500" });
const inter_regular = Inter({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "TZoom",
  description: "A simple typing test inspired by monkeytype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <nav className="flex flex-row h-1/6"></nav>
      <body className={inter_regular.className}>{children}</body>
    </html>
  );
}
