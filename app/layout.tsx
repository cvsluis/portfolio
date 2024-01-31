import type { Metadata } from "next";
import { dm_serif_display, inter } from "./fonts";
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
    <html lang="en" className={`${inter.variable} ${dm_serif_display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
