import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interdisplay = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Rishav Raj",
  description: "TO DO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interdisplay.className}>{children}</body>
    </html>
  );
}
