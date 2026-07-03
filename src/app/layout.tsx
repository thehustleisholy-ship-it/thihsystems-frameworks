import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frameworks.thihsystems.com"),
  title: {
    default: "Framework Fridays by THIHsystems",
    template: "%s | THIHsystems Framework Fridays",
  },
  description:
    "A public THIHsystems library for practical AI frameworks, demos, GitHub build notes, and Substack essays.",
  openGraph: {
    title: "Framework Fridays by THIHsystems",
    description: "AI frameworks for real human burdens.",
    url: "https://frameworks.thihsystems.com",
    siteName: "THIHsystems Framework Fridays",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
