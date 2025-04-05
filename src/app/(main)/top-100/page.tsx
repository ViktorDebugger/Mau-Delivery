import Image from "next/image";
import LongTrace from "@/components/LongTrace";

const Top = () => {
  return (
    <main className="relative">
      <Image
        className="absolute bottom-[-140px] left-[80px]"
        src="/images/bg-items/line.png"
        alt=""
        width={3}
        height={660}
      />
      <div className="font-katibeh text-[48px] bottom-[70px] left-[-35px] absolute rotate-[-90deg]">
        Navigate
      </div>
      <div className="font-katibeh text-[48px] px-[21px] absolute bottom-[-140px]">
        02
      </div>
      {/* <div className="absolute w-full overflow-hidden">
        <div className="animate-infinite-scroll-horizontal whitespace-nowrap">
          <div className="inline-flex gap-[100px]">
            <Image
              src="/images/bg-items/bottom-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/top-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/bottom-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/top-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/bottom-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/top-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/bottom-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/top-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/bottom-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/top-trace.png"
              alt=""
              width={130}
              height={300}
            />
          </div>
          <div className="inline-flex gap-[100px]">
            <Image
              src="/images/bg-items/bottom-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/top-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/bottom-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/top-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/bottom-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/top-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/bottom-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/top-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/bottom-trace.png"
              alt=""
              width={130}
              height={300}
            />
            <Image
              src="/images/bg-items/top-trace.png"
              alt=""
              width={130}
              height={300}
            />
          </div>
        </div>
      </div> */}
      <div className="mt-[10px]">
        <h1 className="font-karantina text-[100px] text-center relative z-1">
          Top 100
        </h1>
        <ul className="mx-auto max-w-[1100px] flex flex-wrap gap-[70px]">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <li
              key={item}
              className="bg-[#F2680F] w-[317px] h-[485px] rounded-4xl relative z-1"
            >
              <div className="px-[29px] pt-[27px]">
                <Image
                  className="rounded-4xl"
                  src="/images/dishes/borch.png"
                  alt="dish"
                  width={259}
                  height={217}
                />
                <h1 className="font-katibeh text-[35px] leading-[1]">
                  Name restaurant
                </h1>
                <p className="font-katibeh text-[25px] leading-[1.3]">Borch</p>
                <p className="font-katibeh text-[25px] leading-[1.3] text-right">
                  230 UAH
                </p>
              </div>
              <div className="flex flex-col gap-2 pb-4 px-2 mt-4">
                <div className="bg-[#FAB735] rounded-4xl font-katibeh flex px-[10px] py-[15px]">
                  <h1 className="text-[25px] leading-3">Abs</h1>
                  <p className="text-[15px] ml-[15px] leading-4.5 w-[152px]">
                    Very tasty. I really like this dish
                  </p>
                  <p className="text-[15px] relative bottom-[-10px] right-[-20px]">
                    1 minute ago
                  </p>
                </div>
                <div className="bg-[#FAB735] rounded-4xl font-katibeh flex px-[10px] py-[15px]">
                  <h1 className="text-[25px] leading-3">Abs</h1>
                  <p className="text-[15px] ml-[15px] leading-4.5 w-[152px]">
                    Very tasty. I really like this dish
                  </p>
                  <p className="text-[15px] relative bottom-[-10px] right-[-20px]">
                    1 minute ago
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute left-[190px] bottom-[-140px] top-[-400px] z-0 overflow-hidden">
        <LongTrace />
      </div>
    </main>
  );
};

export default Top;
