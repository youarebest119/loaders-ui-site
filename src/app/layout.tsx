import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "./cascadia-font.css"
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loaders-ui",
  description: "Lots of loaders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: inter.style.fontFamily }}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
