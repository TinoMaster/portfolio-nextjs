import React from "react";
import { ShadowColorsCard } from "./cards/ShadowColorsCard";
import { CgIfDesign } from "react-icons/cg";
import { PiStrategyBold } from "react-icons/pi";
import { MdOutlineDeveloperMode, MdSecurity} from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { RiEqualizer2Fill } from "react-icons/ri";

const features = [
  {
    icon: CgIfDesign,
    title: "Design",
    description: "Unique design with high quality.",
    color: "secondary",
  },
  {
    icon: PiStrategyBold,
    title: "Strategy",
    description: "Strong vision for your ideas.",
    color: "primary",
  },
  {
    icon: MdOutlineDeveloperMode,
    title: "Development",
    description: "Code quality and speed.",
    color: "third",
  },
  {
    icon: BiSupport,
    title: "Support",
    description: "24/7 support.",
    color: "third",
  },
  {
    icon: MdSecurity,
    title: "Security",
    description: "Security and privacy are our top priorities.",
    color: "secondary",
  },
  {
    icon: RiEqualizer2Fill,
    title: "Quality",
    description: "Our secret is to love what we do.",
    color: "primary",
  },
];

export const ReasonForOurService = () => {
  return (
    <section className="py-24 bg-gradient-to-b ">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-300 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-white text-2xl font-semibold sm:text-4xl">
            Why you should choose us
          </h3>
          <p className="mt-3 text-pretty">
            We are a team of experts with years of experience in the field.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-5 grid-cols-2 lg:grid-cols-3 text-xs sm:text-base">
            {features.map((item, idx) => (
              <ShadowColorsCard
                key={idx}
                title={item.title}
                description={item.description}
                Icon={item.icon}
                color={item.color}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
