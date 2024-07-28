import { myStacks } from "@/data/common";
import Image from "next/image";

export const MyStackTech = () => {
  return (
    <div className="w-full px-4 lg:px-0">
      <div className="max-w-xl mx-auto text-center">
        <p className="w-full text-xl text-gray-400">My Tech Stack</p>
      </div>
      <div className="flex justify-center">
        <ul className="inline-grid grid-cols-3 lg:grid-cols-6 gap-5">
          {myStacks.map((stack) => (
            <li className="text-center" key={stack.name}>
              <Image
                priority={true}
                width={100}
                height={100}
                className="p-2 h-9"
                key={stack.name}
                alt={stack.name}
                src={stack.img}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
