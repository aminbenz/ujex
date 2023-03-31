import type { Metadata } from 'next';
import { SessionProvider } from "next-auth/react";
import { Footer } from "@components";
import Navbar from "./components/navigations/Navbar";
import { Inter } from "next/font/google";

import "@styles/reset.css";
import "@styles/globals.css";

const app = {
  name: "Amino",
  title: "Starter template",
  description:
    "Ultimate starter template, created with the latest version of Nextjs 13 and Typescript with an advanced folder structure for large-scale applications.",
  type: "website",
  url: "https://changeme.vercel.app",
  logo: "/logo.svg",
  keywords: ["Starter template", "Nextjs"],
  creator: "Amin Benz",
  publisher: "Amin Benz",
  locale: "en-US",
  theme_color: "purple",
  color_scheme: "light dark",
};


export const metadata: Metadata = {
  title: app.title,
  generator: app.name,
  applicationName: app.name,
  description: app.description,
  keywords: app.keywords,
  creator: app.creator,
  publisher: app.publisher,
  themeColor: "purple",
  colorScheme: "light dark",
  referrer: "origin-when-cross-origin",
  // formatDetection: {
  //   email: "no",
  //   address: "no",
  //   telephone: "no",
  // },
  openGraph: {
    title: app.title,
    description: app.description,
    url: app.url,
    siteName: app.name,
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
      {
        url: "",
        width: 1800,
        height: 1600,
        alt: "Amino logo",
      },
    ],
    locale: app.locale,
    // type: app.type,
    // publishedTime: '2023-01-01T00:00:00.000Z',
    // authors: ['Seb', 'Josh'],
  },
  twitter: {
    card: "summary_large_image",
    title: app.name,
    description: app.description,
    siteId: app.url,
    // creator: '@aminbenz',
    // creatorId: '1467726470533754880',
    // images: ['https://nextjs.org/og.png'],
  },
  icons: {
    icon: "/icons/favicon-32x32.png",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-icon.png",
    other: {
      rel: "/icons/apple-touch-icon",
      url: "/icons/apple-touch-icon.png",
    },
  },
  // robots: {
  //   index: false,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={inter.className}>
      <head />
      <body>
        {/* <SessionProvider> */}
        <Navbar />
        {children}
        <Footer />
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
