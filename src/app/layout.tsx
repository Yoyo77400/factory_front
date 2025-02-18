import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Factory Exam App",
  description: "Factory Exam App created by Yohan",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="fr">
          <body
            className={inter.className}
          >
            <Providers>{children}</Providers>
          </body>
        </html>

  );
}
