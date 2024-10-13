import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/../"}>
      <Image
        alt="Logo de S@ff"
        title="Logo de S@ff"
        width={100}
        height={50}
        src={"/Logos/logo.png"}
        className="dark:contrast-75"
      />
    </Link>
  );
}
