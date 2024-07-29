export const BtnContactMe = () => {
  return (
    <button className="relative w-full max-w-[350px] lg:max-w-[200px] inline-flex overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-sec-100">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#05b9d5_0%,#6b01d6_50%,#05b9d5_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-darkMode/80 px-3 py-3 font-medium text-white backdrop-blur-3xl">
        Contact us
      </span>
    </button>
  );
};
