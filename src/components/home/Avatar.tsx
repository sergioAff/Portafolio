import Image from "next/image";
import { motion } from "framer-motion";

export const Avatar = () => {
  return (
    <div className="avatar-container relative py-1 animate-fadeBottomForCV w-full flex items-center justify-center sm:w-2/3 h-full lg:w-2/6 ">
      <Image
        src="/Home/me.png"
        alt="Avatar"
        width={1000}
        height={1000}
        priority
        className="avatar-image w-1/2"
      />
    </div>
  );
};
