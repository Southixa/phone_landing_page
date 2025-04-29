import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_Lao } from "next/font/google";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const notoSansLao = Noto_Sans_Lao({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin", "lao"],
  variable: "--font-noto-sans-lao",
});

export const metadata: Metadata = {
  title: "Phone Landing Page | Modern Mobile Application",
  description: "A modern and responsive landing page for a financial mobile application with sleek design and powerful features.",
  metadataBase: new URL(BASE_URL || 'http://localhost:3000'),
  openGraph: {
    title: "Phone Landing Page | Modern Mobile Application",
    description: "A modern and responsive landing page for a financial mobile application with sleek design and powerful features.",
    type: "website",
    url: BASE_URL,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Phone App Landing Page",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lo">
      <body
        className={`${geistMono.variable} ${notoSansLao.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
