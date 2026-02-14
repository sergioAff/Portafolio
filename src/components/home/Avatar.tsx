import Avatar from "react-avatar";
import { motion } from "framer-motion";

export const AvatarComponent = () => {
  return (
    <motion.div
      className="relative py-4 w-full flex items-center justify-center sm:w-2/3 lg:w-2/6 h-full"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
    >
      <div className="relative group">
        {/* Glow ring behind avatar */}
        <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-orange-400 via-orange-tertiary to-amber-warm opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-500 animate-glow-pulse" />
        <Avatar
          src="/Home/me.jpeg"
          size="230"
          round={true}
          alt="Profile picture of Sergio Adrián Fernández"
          className="relative shadow-xl ring-4 ring-offset-4 ring-orange-500 transition-all duration-500 ease-out hover:ring-offset-8 hover:shadow-2xl hover:scale-[1.02] glow-ring"
        />
      </div>
    </motion.div>
  );
};
