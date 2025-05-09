"use client";

import Image from "next/image";
import Quotes from "@/components/Decorations/Quotes";
import delivery from "@/assets/images/bg-items/meow-delivery.png";
import bgItem01 from "@/assets/images/bg-items/bg-item-1.png";
import bgItem02 from "@/assets/images/bg-items/bg-item-2.png";
import bgItem08 from "@/assets/images/bg-items/bg-item-8.png";

const Preview = () => {
  const handleScroll = () => {
    const topSection = document.getElementById("top-section");
    if (topSection) {
      const offset = -120;
      const topPosition =
        topSection.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative">
      <Image
        className="absolute -top-1 hidden md:block"
        src={bgItem02}
        alt=""
        width={375}
        data-aos="fade-down"
      />
      <Image
        className="absolute -top-2 right-0 hidden md:block"
        src={bgItem01}
        alt=""
        width={250}
        data-aos="fade-down"
      />
      <Image
        className="absolute -bottom-[400px] hidden md:block"
        src={bgItem08}
        alt=""
        width={600}
        data-aos="fade-right"
      />
      <div className="flex justify-center">
        <div className="relative mt-28 w-2/3 md:mt-48">
          <div
            className="relative w-[270px] sm:w-[450px] lg:w-[550px]"
            data-aos="fade-left"
          >
            <div className="absolute -top-4 right-4 hidden sm:block">
              <Quotes />
            </div>
            <h1 className="font-karantina text-7xl leading-[0.8] sm:text-[120px] lg:text-[150px]">
              MAU DELIVERY
            </h1>
            <p className="mt-4 w-full text-2xl leading-[0.8] md:text-3xl lg:w-3/5 lg:text-4xl xl:w-4/5">
              Your food should not only be tasty, but also hot.
            </p>
          </div>

          <button
            onClick={handleScroll}
            className="font-karantina mt-8 cursor-pointer rounded-full bg-[#F2680F] px-16 py-3 text-4xl transition-colors duration-300 ease-in-out hover:bg-[#F2570F] md:text-5xl"
            data-aos="fade-left"
          >
            MAKE ORDER
          </button>
          <Image
            className="absolute top-58 right-10 left-10 z-1 lg:top-16 lg:right-0 lg:left-auto"
            src={delivery}
            alt="MEOW"
            width={430}
            data-aos="fade-up"
          />
        </div>
      </div>
    </section>
  );
};

export default Preview;
