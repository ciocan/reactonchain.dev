import type { Metadata } from "next";
import { Tourney } from "next/font/google";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

const gfont = Tourney({ subsets: ["latin"], variable: "--font-head", weight: ["200", "400"] });

export const metadata: Metadata = {
  title: "Decentralize the Frontend @ ReactOnChain",
  description: "by storing the JSX components on the NEAR blockchain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="reactonchain.dev"
          src="https://plausible.ciocan.dev/js/script.js"
        />
      </head>
      <body className={`${GeistSans.variable} ${gfont.variable}`}>{children}</body>
    </html>
  );
}
