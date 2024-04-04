import Asterisk from "@/app/ui/svg/Asterisk";
import Link from "next/link";
import Close from "../svg/Close";

export default function Header() {
  return (
    <div className="flex flex-row justify-between">
      <Link href="/#projects" className="flex flex-row items-center gap-2">
        <Asterisk />
        PROJECTS
      </Link>
      <Link href="/#projects" className="hover:scale-110 transition">
        <Close />
      </Link>
    </div>
  );
}
