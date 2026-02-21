import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Linear – The product development system for teams and agents",
  description:
    "Purpose-built for planning and building products. Designed for the AI era. Linear helps teams streamline software projects, sprints, tasks, and bug tracking.",
  keywords: [
    "project management",
    "issue tracking",
    "agile",
    "product development",
    "AI agents",
  ],
  openGraph: {
    title: "Linear – The product development system for teams and agents",
    description:
      "Purpose-built for planning and building products. Designed for the AI era.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
