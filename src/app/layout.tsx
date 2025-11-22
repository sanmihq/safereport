import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/fonts";
import { Providers } from "./providers";
import { getMetadata } from "@/lib/metadata";
import Navbar from "@/components/layout/Navbar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

export const metadata: Metadata = getMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.familjen.className} bg-[#F8F8F9] antialiased`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen overflow-y-auto pb-20">{children}</main>
          <MobileBottomNav />
        </Providers>
      </body>
    </html>
  );
}
