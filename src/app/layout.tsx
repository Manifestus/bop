import type { Metadata } from "next";
import { Manrope, Public_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { TopAppBar } from "@/components/layout/TopAppBar";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Bridge of Peace",
    default: "Bridge of Peace | Social Impact in Honduras",
  },
  description:
    "Non-governmental organization dedicated to peacebuilding and social development in Honduras through technical and humanitarian cooperation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} ${publicSans.variable} antialiased`}>
        <LanguageProvider>
          <Navbar />
          <TopAppBar />
          <main className="min-h-screen pb-16 md:pb-0">{children}</main>
          <Footer />
          <BottomNav />
        </LanguageProvider>
      </body>
    </html>
  );
}
