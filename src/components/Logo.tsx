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
        className="saturate-200 brightness-90 contrast-75 w-20 md:w-24"
      />
    </Link>
  );
}
