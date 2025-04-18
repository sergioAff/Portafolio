import Avatar from "react-avatar";
import { useEffect, useState } from "react";

export const AvatarComponent = () => {
  const [avatarSize, setAvatarSize] = useState("240");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 2000) {
        setAvatarSize("350");
      } else {
        setAvatarSize("240");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative py-4 w-full flex items-center justify-center sm:w-2/3 lg:w-2/6 h-full animate-fadeBottomForCV transition-transform duration-300 ease-in-out">
      <Avatar
        src="/Home/me.jpeg"
        size={avatarSize}
        round={true}
        alt="Profile picture of Sergio Adrián Fernández"
        className="shadow-xl ring-4 ring-offset-2 ring-orange-500 transition-all duration-200 ease-in-out hover:ring-offset-4 hover:shadow-2xl"
      />
    </div>
  );
};
