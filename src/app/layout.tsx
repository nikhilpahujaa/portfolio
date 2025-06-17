import "./globals.css";
import { getUrl } from "@/utilities/getUrl";
import { Geist_Mono, Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

type Props = {
  children: React.ReactNode;
};

const GeistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="font-geist-sans bg-white overscroll-none dark:bg-zinc-900">
        <ThemeProvider defaultTheme="light" storageKey="nikhil-theme">
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-M80GLPRQFQ" />
      <Analytics />
    </html>
  );
};

export default RootLayout;

export const viewport: Viewport = {
  themeColor: "##ffffff",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(getUrl),
  title: {
    default: "Nikhil Pahuja | Software Developer | Based in Gurgaon",
    template: "%s - Nikhil Pahuja | Software Developer | Based in Gurgaon",
  },
  description: "Portfolio of Nikhil Pahuja: Node.js, Express, MongoDB, React, Next.js, and more. Explore my projects, experience, and skills.",
};
