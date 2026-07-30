import type { Metadata } from "next";
import {
  Montserrat,
  Outfit,
  Geist,
  Plus_Jakarta_Sans,
} from "next/font/google";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-next",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-next",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-next",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit-next",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blade & Co.",
  description: "Premium hunting knives and axes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geist.variable}
        ${plusJakarta.variable}
        ${montserrat.variable}
        ${outfit.variable}
     
      `}
    >
      <body className="font-jakarta bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}