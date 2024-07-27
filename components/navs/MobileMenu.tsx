"use client";
import { TLink } from "@/types/common";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { Links } from "./Links";

/* 
Descripción del componente:
Este componente esta diseñado para el mobile menu. 
Tiene toda la logica de forma interna y no usa otros componentes
*/

export const MobileMenu = ({ links }: { links: TLink[] }) => {
  const [isActive, setIsActive] = useState(false);

  const variant = {
    open: {
      x: 0,
      opacity: [0, 1],
    },
    closed: {
      x: "100vw",
      opacity: 0,
    },
  };

  return (
    <>
      <motion.div
        onClick={() => setIsActive(false)}
        variants={variant}
        initial={isActive ? "open" : "closed"}
        animate={isActive ? "open" : "closed"}
        className={`w-screen h-svh min-h-[800px] lg:hidden fixed flex flex-col top-0 right-0 text-slate-200 bg-darkMode shadow-md py-2 overflow-hidden`}
      >
        <div className="flex w-full justify-center items-center z-10 mt-10 grow">
          <Links links={links} mobile={true} />
        </div>
      </motion.div>
      {/* Button section */}
      <section className={`rounded-l-3xl text-slate-200 z-40`}>
        <div className="lg:pr-5 lg:pl-10 lg:hidden px-3 flex justify-between items-center hover:-translate-x-1 transition-transform">
          <button
            onClick={() => setIsActive(!isActive)}
            aria-label={isActive ? "Close menu" : "Open menu"}
            className="lg:hidden select-none"
          >
            {isActive ? (
              <IoClose className="text-4xl hover:text-primary hover:cursor-pointer transition-colors" />
            ) : (
              <TbMenuDeep className="text-4xl hover:text-primary hover:cursor-pointer transition-colors" />
            )}
          </button>
        </div>
      </section>
    </>
  );
};
