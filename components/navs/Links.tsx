"use client";
import { TLink } from "@/types/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* 
Descripción del componente:
Este componente me permite ingresar un array de links, 
los renderiza y en dependencia de cual link este activo, pone un background. 
Esta hecho para tener un comportamiento diferente en mobile y desktop
*/

interface LinksProps {
  links: TLink[];
  mobile?: boolean;
}

export const Links = ({ links, mobile = false }: LinksProps) => {
  const pathname = usePathname();
  const regex = /\/\w*/;
  const route = pathname.match(regex) ?? "";

  return (
    <ul
      className={`relative pr-2 gap-4 ${
        mobile ? "flex flex-col " : "flex-row hidden lg:flex last:mr-5"
      }`}
    >
      {links?.map((link) => (
        <Link
          className={`flex items-baseline justify-center transition-colors px-2 py-1 rounded-md relative capitalize font-inter ${
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
