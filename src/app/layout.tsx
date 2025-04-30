import Head from "next/head";
import type { Metadata } from "next";
import { Baloo_Bhai_2, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const balooBhai2 = Baloo_Bhai_2({
  subsets: ["latin"],
  variable: "--font-baloo-bhai",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
export const metadata: Metadata = {
  title: "MediScan - AI Medicine Scanner at Your Fingertips",
  description: "MediScan is your trusted AI-powered health companion designed to simplify medicine identification and understanding, especially for rural healthcare workers.",
  keywords: ["medicine scanner", "AI healthcare", "medicine identification", "rural healthcare", "medical app", "health AI", "medicine app"],
  authors: [{ name: "Kethan VR" }],
  creator: "Kethan VR",
  publisher: "MediScan Technologies",
  metadataBase: new URL("https://mediscan.kethanvr.me"),
  openGraph: {
    title: "MediScan - AI Medicine Scanner at Your Fingertips",
    description: "Identify medicines instantly with AI-powered scanning technology",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MediScan App Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MediScan - AI Medicine Scanner",
    description: "Identify medicines instantly with AI-powered scanning technology",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
  category: "healthcare",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="google-adsense-account" content="ca-pub-6985167612880362" />
      </Head>
      <body className={`${balooBhai2.variable} ${poppins.variable} font-sans antialiased`}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6985167612880362"
          crossOrigin="anonymous"
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
        >
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
