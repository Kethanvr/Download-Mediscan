import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MediScan - AI Medicine Scanner at Your Fingertips",
  description: "MediScan is your trusted AI-powered health companion designed to simplify medicine identification and understanding, especially for rural healthcare workers.",
  keywords: ["medicine scanner", "AI healthcare", "medicine identification", "rural healthcare", "medical app"],
  authors: [{ name: "Kethan VR" }],
  creator: "Kethan VR",
  publisher: "MediScan Technologies",
  metadataBase: new URL("https://mediscan-app.vercel.app"),
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-primary">
          Skip to main content
        </a>
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
