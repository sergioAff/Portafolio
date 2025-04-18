import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/../"}>
      <Image
        alt="Logo de S@ff"
        title="Logo de S@ff"
        width={1000}
        height={1000}
        src={"/Logos/logo.png"}
        priority
        className="saturate-200 brightness-125 contrast-50 w-20 md:w-24 2xl:w-32 hover:scale-95 active:scale-90 transition-transform ease-in-out duration-150"
      />
    </Link>
  );
}
