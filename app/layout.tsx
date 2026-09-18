import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

const pixel = localFont({ src: "../public/fonts/PressStart2P-Regular.ttf", variable: "--font-pixel", display: "swap" });
const geist = localFont({ src: "../public/fonts/Geist.ttf", variable: "--font-geist-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Agung Gihon | Crafting the Web",
  description: "Masuki dunia Agung Gihon. Mahasiswa Informatika dan web development learner, membangun pengalaman digital satu blok demi satu blok.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${pixel.variable} ${geist.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
