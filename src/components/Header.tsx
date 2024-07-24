import Contact from "./contact/Contact";
import Logo from "./Logo";
import Languaje from "./Languaje";
import DarkMode from "./DarkMode";
import NavLinks from "../components/NavLinks";

export const Header = () => {
  return (
    <header className=" z-20 mb-4 w-full flex flex-col justify-between items-center pt-2 px-4">
      <div className=" flex w-full justify-between items-center">
        <Logo />
        <div className=" flex items-center gap-7 md:gap-9">
          <DarkMode />
          <Languaje />
          <Contact />
        </div>
      </div>
      <div className="">
        <NavLinks />
      </div>
    </header>
  );
};
