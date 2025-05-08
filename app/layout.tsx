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
export const metadata = {
  title: "Ram Prasad Ramakrishnan",
  description: "Explore the professional portfolio of Ram Prasad Ramakrishnan, an offshore field engineer",
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Ram Prasad Ramakrishnan",
    description: "Explore the professional portfolio of Ram Prasad Ramakrishnan, an offshore field engineer",
    url: "https://ramoffshore.life",
    images: [
      {
        url: "https://ramoffshore.life/og.png",
        width: 1200,
        height: 630,
        alt: "Portfolio OG Image",
      },
    ],
    type: "website",
  },
  canonical: "https://ramoffshore.life/",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
