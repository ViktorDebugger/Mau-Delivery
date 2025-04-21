import Image from "next/image";

import Quotes from "@/components/Decorations/Quotes";
import delivery from "../../../public/images/bg-items/meow-delivery.png"
import bgItem01 from "../../../public/images/bg-items/bg-item-1.png";
import bgItem02 from "../../../public/images/bg-items/bg-item-2.png";
import bgItem08 from "../../../public/images/bg-items/bg-item-8.png";

const Preview = () => {
  return (
    <section className="relative">
      <Image
        className="absolute -top-1 hidden md:block"
        src={bgItem02}
        alt=""
        width={375}
        height={200}
        data-aos="fade-down"
      />
      <Image
        className="absolute -top-2 right-0 hidden md:block"
        src={bgItem01}
        alt=""
        width={250}
        height={1000}
        data-aos="fade-down"
      />
      <Image
        className="absolute -bottom-[400px] hidden md:block"
        src={bgItem08}
        alt=""
        width={600}
        height={300}
        data-aos="fade-right"
      />
      <div className="flex justify-center">
        <div className="relative mt-28 md:mt-48 w-2/3">
          <div className="relative w-[270px] sm:w-[450px] lg:w-[550px]" data-aos="fade-left">
            <div className="absolute -top-4 right-4 hidden sm:block">
              <Quotes />
            </div>
            <h1 className="font-karantina text-7xl sm:text-[120px] lg:text-[150px] leading-[0.8]">
              MAU DELIVERY
            </h1>
            <p className="w-full lg:w-3/5 xl:w-4/5 mt-4 text-2xl md:text-3xl lg:text-4xl leading-[0.8]">
            Your food should not only be tasty, but also hot.
          </p>
          </div>
          
          <button className="font-karantina mt-8 cursor-pointer rounded-full bg-[#F2680F] px-16 py-3 text-4xl md:text-5xl transition-colors duration-300 ease-in-out hover:bg-[#F2570F]" data-aos="fade-left">
            MAKE ORDER
          </button>
          <Image
            className="absolute top-58 lg:top-16 left-10 right-10 lg:right-0 lg:left-auto z-1"
            src={delivery}
            alt="MEOW"
            width={430}
            height={430}
            data-aos="fade-up"
          />
        </div>
      </div>
    </section>
  );
};

export default Preview;
