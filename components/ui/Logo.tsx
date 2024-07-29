import Image from "next/image";

export const Logo = () => {
  return (
    <div className="w-12 h-12 bg-gradient-to-l from-primary to-secondary relative rounded-full p-1 overflow-hidden">
      <Image
        width={100}
        height={100}
        src="/assets/images/principal-logo.jpg"
        alt="my logo"
        className="w-full h-full object-contain rounded-xl"
      />
    </div>
  );
};