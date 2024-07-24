"use client";

import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import inter from "@/utils/tipografia";
import "@/config/i18next.config";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>S@ff</title>
      </head>
      <body
        className={`${inter} antialiased overflow-x-hidden flex flex-col min-h-[100dvh]`}
      >
        <Header />
        <main className="z-20 flex-1 relative flex flex-col pb-20 justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
