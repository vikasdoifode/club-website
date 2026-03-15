import type { Metadata } from "next";
import { Geist, Mozilla_Headline } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/custumCorsor";

const geistSans = Geist({
  variable: "--font-geist-sans",   // ✅ correct
  subsets: ["latin"],
  display: "swap",
});

const mozillaHeadline = Mozilla_Headline({
  variable: "--font-mozilla-headline", // ✅ correct
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CSA",
  description: "Computer Student Association",
  icons: {
    icon: "/Logo.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${mozillaHeadline.variable}
          antialiased
          bg-black
        `}
      >
        <CustomCursor />
        <main className="relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}