import Image from "next/image";

export const Avatar = () => {
  return (
    <Image
      src={"/Home/me.png"}
      alt={""}
      width={1000}
      height={1000}
      className="absolute w-[40dvw] h-auto"
    />
  );
};
