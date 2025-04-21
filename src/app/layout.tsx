"use client";

import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import urbanist from "@/utils/tipografia";
import "@/config/i18next.config";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { SplashPageFaster } from "@/components/SplashPage";
import { Up } from "@/components/Up";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSplashFaster, setShowSplashFaster] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashFaster(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#F9EEE7" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <meta
          name="description"
          content="Sergio Fernández's personal website, where you can find information about his projects and contact him."
        />
        <meta
          name="keywords"
          content="Sergio Fernández, software engineer, developer, projects, contact, portfolio, about me, skills, experience, education, certifications, projects, contact, full stack, frontend, backend, javascript, typescript, react, node.js, python, php, mysql, postgresql, docker, kubernetes, aws, azure, devops, agile, scrum, kanban, project management, team leader, team management, leadership, communication, teamwork, problem solving, critical thinking, creativity, innovation, design, ui/ux, user experience, user interface, user testing, user research, user feedback, user testing, user research, user feedback, user testing, user research, user feedback, user testing, user research, user feedback"
        />
        <meta name="author" content="Sergio Fernández" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="google-site-verification" content="google-site-verification=google-site-verification" />    
        <title>S@ff</title>
      </head>
      <body
        className={`${urbanist.className} bg-claro antialiased flex flex-col min-h-[100dvh]`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="light"
        >
          {showSplashFaster ? (
            <SplashPageFaster />
          ) : (
            <>
              <Header />
              <main className="z-20 flex-1 relative flex flex-col pb-20 justify-center">
                {children}
                <Up />
              </main>
              <Footer />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
