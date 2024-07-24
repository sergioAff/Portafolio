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
        src={"/Logos/B95FF7BB-54A6-45AC-BDD6-97A3C98B0CE32.svg"}
      />
    </Link>
  );
}
