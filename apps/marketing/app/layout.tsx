import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

import "./(marketing)/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap"
});

export const metadata: Metadata = {
  title: "GhostatlasIP (Jade) - Proxies that route like they don't exist",
  description: "Premium proxy infrastructure with clean pools, sub-40ms routing, and visible exit telemetry."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetBrainsMono.variable} ${fraunces.variable} bg-bg-primary font-sans text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
