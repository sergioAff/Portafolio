"use client";

import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import urbanist from "@/utils/tipografia";
import "@/config/i18next.config";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { SplashPage, SplashPageFaster } from "@/components/SplashPage";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showSplashFaster, setShowSplashFaster] = useState(true);
  const [fadeOutFaster, setFadeOutFaster] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (hasVisited) {
      // Mostrar solo el SplashPageFaster para usuarios que ya han visitado
      setShowSplashFaster(true);
      const timerFaster = setTimeout(() => {
        setFadeOutFaster(true);
        setTimeout(() => {
          setShowSplashFaster(false);
        }, 100);
      }, 600);
      return () => clearTimeout(timerFaster);
    } else {
      // Mostrar solo el SplashPage para usuarios que visitan por primera vez
      setShowSplash(true);
      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setShowSplash(false);
          localStorage.setItem("hasVisited", "true");
        }, 1000);
      }, 2900);
      return () => clearTimeout(timer);
    }
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
        <ThemeProvider attribute="class" enableSystem={true}>
          {/* Mostrar solo uno de los splash screens según la condición */}
          {showSplash && <SplashPage fadeOut={fadeOut} />}
          {showSplashFaster && !showSplash && (
            <SplashPageFaster fadeOut={fadeOutFaster} />
          )}

          {!showSplash && !showSplashFaster && (
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
