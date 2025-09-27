import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../app/theme-provider";
import { Inter } from 'next/font/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krea",
  description: 'Pixel-perfect Krea.ai UI clone with Next.js, TypeScript, Tailwind CSS, and Framer Motion.',
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
  <ThemeProvider attribute="class" enableSystem defaultTheme="system" disableTransitionOnChange >
      {children}
  </ThemeProvider>
      </body>
    </html>
  );
}
