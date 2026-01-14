import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "2nd Anniversary - Haikal & Qodimah",
  description: "Two years of love, laughter, and learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${jakarta.variable} ${dancing.variable} antialiased bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-white transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}
