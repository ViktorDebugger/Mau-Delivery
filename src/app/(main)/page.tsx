import Quotes from "@/components/Quotes";
import ShortTrace from "@/components/ShortTrace";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Image
        className="absolute top-[-200px] left-0"
        src="/images/bg-items/bg-item-2.png"
        alt=""
        width={375}
        height={200}
      />
      <Image
        className="absolute top-[-200px] right-0"
        src="/images/bg-items/bg-item-1.png"
        alt=""
        width={180}
        height={500}
      />
      <Image
        className="absolute bottom-[-240px] left-[80px]"
        src="/images/bg-items/bg-item-3.png"
        alt=""
        width={600}
        height={300}
      />
      <Image
        className="absolute bottom-[-240px] left-[80px]"
        src="/images/bg-items/line.png"
        alt=""
        width={3}
        height={660}
      />
      <div className="font-katibeh text-[48px] top-[100px] left-[-35px] absolute rotate-[-90deg]">
        Navigate
      </div>
      <div className="font-katibeh text-[48px] px-[21px] absolute bottom-[-240px]">
        01
      </div>
      <div className="mt-[200px] ml-[188px] relative w-[550px]">
      <Quotes />
        <h1 className="font-karantina text-[150px] leading-[0.8]">
          MAU DELIVERY
        </h1>
        <p className="w-[410px] font-katibeh text-[36px] leading-[0.8]">
          Your food should not only be tasty, but also hot.
        </p>
        <button className="font-karantina text-[48px] bg-[#F2680F] rounded-[50px] mt-[15px] px-[60px] py-[5px] cursor-pointer hover:bg-[#f2480f] transition duration-300 ease-in-out">
          MAKE ORDER
        </button>
        <Image
          className="absolute right-[-345px] top-[43px] z-1"
          src="/images/main/meow-delivery.png"
          alt="MEOW"
          width={470}
          height={470}
        />
      </div>
      <div className="absolute right-[190px] bottom-[-240px] top-[-400px] z-0 overflow-hidden">
        <ShortTrace />
      </div>
    </main>
  );
}
