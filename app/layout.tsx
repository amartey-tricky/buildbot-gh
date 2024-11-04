import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ViewTransitions } from "next-view-transitions";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const title = "Biuldbot GH";
const description =
  "We help you build a strong financial future with tailored investment strategies and comprehensive insurance solutions. Secure your wealth with our expert team.";

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords:
    "financial planning, investments, insurance, wealth management, financial advice, personal finance, retirement planning, tax planning, estate planning, finance house",
  openGraph: {
    title: title,
    description: description,
    type: "website",
    siteName: "Buildbot GH",
    url: "https://buildbotgh.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@buildbotgh",
    creator: "@buildbotgh",
    title: title,
    description: description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
