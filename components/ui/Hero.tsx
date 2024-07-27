import Image from "next/image";
import { BtnDownloadCurr } from "./BtnDownloadCurr";

export const Hero = () => {
  return (
    <section className="w-full mt-[70px] relative">
      <div className="max-w-screen-xl mx-auto px-4 py-16 lg:py-28 gap-12 text-gray-600 md:px-8">
        <div className="flex justify-center items-center py-2">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src="/assets/images/my_image.png"
              alt="hero"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-medium">Full stack developer</h2>
          <h2 className="text-4xl text-gray-200 font-extrabold mx-auto md:text-5xl">
            Design your projects faster with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-secondary">
              the largest figma UI kit
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <BtnDownloadCurr />
          </div>
        </div>
        <div className="mt-14"></div>
      </div>
    </section>
  );
};
