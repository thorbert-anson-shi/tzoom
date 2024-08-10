import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import threeLines from "@/assets/three-lines.svg";
import profilePlaceholder from "@/assets/profile-placeholder.svg";

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
      <head>
        {/* Added to use Inter in global css stylesheet */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex h-screen w-screen flex-col">
        <nav className="flex h-fit w-full flex-row items-center justify-between border-b border-black px-3 py-1 md:px-5 md:py-3">
          <Image src={threeLines} width={20} height={20} alt="Open menu" />
          <div
            id="Account section"
            className="flex cursor-pointer flex-row space-x-1 py-1 pl-2 hover:bg-neutral-300 md:space-x-2 md:py-2 md:pl-4 md:pr-2"
          >
            <div className="flex flex-col justify-end -space-y-1 text-right">
              <h1>Account name</h1>
              <h2>Top xx.xx%</h2>
            </div>
            <Image
              src={profilePlaceholder}
              width={48}
              height={48}
              alt="Profile picture"
              className="rounded-full"
            />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
