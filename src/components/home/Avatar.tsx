import Avatar from "react-avatar";

export const AvatarComponent = () => {
  return (
    <div className="relative py-4 w-full flex items-center justify-center sm:w-2/3 lg:w-2/6 h-full animate-fadeBottomForCV transition-transform duration-300 ease-in-out">
      <Avatar
        src="/Home/me.jpeg"
        size="230"
        round={true}
        alt="Profile picture of Sergio Adrián Fernández"
        className="shadow-xl ring-4 ring-offset-2 ring-orange-500 transition-all duration-200 ease-in-out hover:ring-offset-4 hover:shadow-2xl"
      />
    </div>
  );
};
