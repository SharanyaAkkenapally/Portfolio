import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Sharanya's Portfolio",
  description: "Portfolio showcasing projects, experience, and expertise in AI Agents and Data Science",
  openGraph: {
    title: "Sharanya's Portfolio",
    description: "Portfolio showcasing projects, experience, and expertise in AI Agents and Data Science",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharanya's Portfolio",
    description: "Portfolio showcasing projects, experience, and expertise in AI Agents and Data Science",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

