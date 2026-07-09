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
    default: "Framework Fridays by THIHsystems | Enterprise Layer Infrastructure Library",
    template: "%s | THIHsystems Framework Fridays",
  },
  description:
    "A public THIHsystems library of enterprise-layer infrastructure frameworks, demo previews, forkable repos, source queues, procurement paths, pilot guides, and policy briefs.",
  openGraph: {
    title: "Framework Fridays by THIHsystems",
    description: "Enterprise-layer frameworks for the systems nobody tests until they fail.",
    url: "https://frameworks.thihsystems.com",
    siteName: "THIHsystems Framework Fridays",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Framework Fridays by THIHsystems",
    description: "Enterprise-layer frameworks for invisible infrastructure failures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
