import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="avatar-conteiner  py-1 -z-10 animate-fadeBottomForCV relative w-full sm:w-2/3  lg:w-2/6">
      <div className="flex items-center justify-center h-full w-full py-5 ">
        <Image
          src={"/Home/me.png"}
          alt={""}
          width={1000}
          height={1000}
          priority
          className=" w-1/2 h-1/2 object-scale-down -z-10"
        />
      </div>
    </div>
  );
};
