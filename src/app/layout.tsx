import type { Metadata, Viewport } from "next";
import { Inter, Calistoga } from 'next/font/google';

import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: "400" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Abu Bakar | Full Stack Developer Portfolio",
  description: "Portfolio of Abu Bakar - Full Stack Developer specializing in high-performance web, desktop, and mobile systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-full">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans overflow-x-hidden max-w-full relative")}>
        {children}
      </body>
    </html>
  );
}
