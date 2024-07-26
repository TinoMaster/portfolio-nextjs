"use client";
import { TLink } from "@/types/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinksProps {
  links: TLink[];
}

export const Links = ({ links }: LinksProps) => {
  const pathname = usePathname();
  const regex = /\/\w*/;
  const route = pathname.match(regex) ?? "";

  return (
    <ul className="md:flex relative hidden pr-2 gap-4 last:mr-5">
      {links?.map((link) => (
        <Link
          className={`flex items-baseline transition-colors px-2 py-1 rounded-md relative capitalize font-inter text-xl ${
            route[0] === link.path
              ? "bg-white text-slate-800"
              : "hover:text-slate-400"
          }`}
          key={link.name}
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
    </ul>
  );
};
