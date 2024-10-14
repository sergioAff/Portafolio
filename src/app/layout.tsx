"use client";

import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import urbanist from "@/utils/tipografia";
import "@/config/i18next.config";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { SplashPageFaster } from "@/components/SplashPage";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSplashFaster, setShowSplashFaster] = useState(true);

  useEffect(() => {
    setShowSplashFaster(false);
    const timer = setTimeout(() => {
      const timerOut = setTimeout(() => {
        setShowSplashFaster(false);
      }, 10000); // Aumenta este tiempo si es necesario
      return () => clearTimeout(timerOut);
    }, 10000); // Aumenta este tiempo si es necesario
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <title>S@ff</title>
      </head>
      <body
        className={`${urbanist.className} bg-claro dark:bg-oscuro antialiased overflow-x-hidden flex flex-col min-h-[100dvh]`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="light"
        >
          {/* Mostrar solo uno de los splash screens según la condición */}
          {showSplashFaster && <SplashPageFaster />}

          {!showSplashFaster && (
            <>
              <Header />
              <main className="z-20 flex-1 relative flex flex-col pb-20 justify-center">
                {children}
              </main>
              <Footer />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
