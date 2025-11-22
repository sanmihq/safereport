import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/fonts";
import { Providers } from "./providers";
import { getMetadata } from "@/lib/metadata";

export const metadata: Metadata = getMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.familjen.className} bg-gray-200 antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
