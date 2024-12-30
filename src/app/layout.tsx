import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';


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
    <html  lang="en" suppressHydrationWarning>
      <body >
        <Navbar />
          {children}
          <Analytics/>
      </body>
    </html>
  );
}
