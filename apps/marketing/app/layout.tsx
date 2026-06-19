import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

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

export const metadata: Metadata = {
  title: "GHOSTATLAS IP",
  description: "Operational intelligence for teams mapping complex environments."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetBrainsMono.variable} bg-bg-primary font-sans text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
