import { BtnContactMe } from "./buttons/BtnContactMe";
import { BtnOurWorks } from "./buttons/BtnOurWorks";
import { InfiniteScroll } from "./InfiniteScroll";

export const Hero = () => {
  const items = [
    "Design",
    "Development",
    "Branding",
    "Strategy",
    "Content",
    "UX",
    "UI",
  ];
  return (
    <section className="w-full mt-[70px] relative bg-gradient-to-t from-transparent via-secondary/5 to-transparent">
      {/* Presentación */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 lg:py-28 text-gray-600 md:px-8">
        <div className="flex justify-center items-center py-2">
          <h2 className="text-sm font-medium">Hi there!</h2>
        </div>
        <div className="space-y-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-200 font-extrabold mx-auto md:text-5xl">
            Innovative and personalized solutions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              to transform your digital presence
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Through innovative strategies and a personalized approach, we take
            your digital presence to the next level, exceeding all expectations.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <BtnContactMe />
            <BtnOurWorks />
          </div>
        </div>
        {/* Tecnologías */}
        <div className="mt-14 flex justify-center items-center h-[100px] lg:h-[200px] bg-gradient-to-r from-transparent via-secondary/5 to-transparent">
          <InfiniteScroll items={items} />
        </div>
      </div>
    </section>
  );
};
