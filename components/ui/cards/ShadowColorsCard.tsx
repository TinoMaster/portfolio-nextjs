import React from "react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  description: string;
  Icon: IconType;
  color: string;
}

export const ShadowColorsCard = ({
  title,
  description,
  Icon,
  color,
}: Props) => {
  return (
    <div className="col-span-1">
      <div
        className={`flex flex-col min-h-[200px] bg-darkMode justify-cente items-center gap-2 py-4 px-5 lg:top-10 relative shadow-2xl rounded-md ${
          color === "primary" ? "shadow-primary/5" : ""
        } ${color === "secondary" ? "shadow-secondary/5" : ""} ${
          color === "third" ? "shadow-third/5" : ""
        }`}
      >
        <Icon
          className={`text-5xl p-2 lg:text-5xl lg:p-3 shadow-lg rounded-full ${
            color === "primary" ? "shadow-primary/30" : ""
          } ${color === "secondary" ? "shadow-secondary/30" : ""} ${
            color === "third" ? "shadow-third/30" : ""
          }`}
        />
        <h3 className="text-xs mt-3 font-semibold">{title}</h3>
        <p className="text-center text-slate-400 font-light text-sm text-balance max-w-[260px]">
          {description}
        </p>
      </div>
    </div>
  );
};
