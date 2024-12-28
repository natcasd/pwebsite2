import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';

const manrope = Manrope({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Nathan DePiero's Website",
  description: "Nathan DePiero's personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable}`}>
        <Navbar />
          {children}
          <Analytics/>
      </body>
    </html>
  );
}
