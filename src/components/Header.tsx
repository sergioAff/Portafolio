"use client";

import { useState, useEffect } from "react";
import Contact from "./contact/Contact";
import Logo from "./Logo";
import Languaje from "./Languaje";
import NavLinks from "../components/NavLinks";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full flex flex-col justify-between items-center pt-2 px-4 transition-all duration-500 ease-out ${scrolled
          ? "glass-strong shadow-glass-lg"
          : "bg-transparent"
        }`}
    >
      <div className="flex w-full justify-between items-center">
        <Logo />
        <div className="flex items-center justify-center gap-5 md:gap-9">
          <Languaje />
          <Contact />
        </div>
      </div>
      <NavLinks />
    </header>
  );
};
