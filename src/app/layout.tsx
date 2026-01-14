import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: '#ee2b5b',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://hairof-anniversary-2nd.vercel.app'),
  title: "Happy 2nd Anniversary, Rofi! ❤️",
  description: "Spesial untuk Ade (Rofi), dari Mas (Kai). Baca surat kecil ini ya... Mas minta maaf & sayang banget sama Ade.",
  openGraph: {
    title: "Happy 2nd Anniversary, Rofi! ❤️",
    description: "Spesial untuk Ade (Rofi), dari Mas (Kai). Mas nulis ini dari hati yg paling tulus.",
    url: 'https://hairof-anniversary-2nd.vercel.app',
    siteName: 'Kai & Rofi Anniversary',
    images: [
      {
        url: '/images/couple.jpg',
        width: 800,
        height: 600,
        alt: 'Kai & Rofi Together',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Happy 2nd Anniversary, Rofi! ❤️",
    description: "Spesial untuk Ade (Rofi), dari Mas (Kai).",
    images: ['/images/couple.jpg'],
  },
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
