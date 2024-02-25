import type { Metadata } from "next";
import { inter, outfit } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caitlin Vandersluis",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
