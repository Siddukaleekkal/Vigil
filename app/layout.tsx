import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vigil – AI Governance & Compliance Platform | EU AI Act Ready",
  description:
    "The enterprise AI governance platform built for the EU AI Act. Automate risk classification, conformity assessments, and technical documentation. Be audit-ready by August 2026.",
  keywords: [
    "AI governance",
    "EU AI Act",
    "AI compliance",
    "risk management",
    "AI regulation",
    "conformity assessment",
    "AI audit",
    "NIST AI RMF",
    "ISO 42001",
  ],
  icons: {
    icon: "/vigil-logo.png",
    apple: "/vigil-logo.png",
  },
  openGraph: {
    title: "Vigil – AI Governance & Compliance Platform",
    description:
      "Automate EU AI Act compliance. Risk classification, technical documentation, and real-time monitoring in one platform.",
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
