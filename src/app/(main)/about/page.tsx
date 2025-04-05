import Image from "next/image";
import LongTrace from "@/components/LongTrace";

const About = () => {
  return (
    <main className="relative">
      <div className="relative">
        <Image
          className="absolute bottom-[-1255px] right-0"
          src="/images/bg-items/bg-item-4.png"
          alt=""
          width={600}
          height={183}
        />
        <div className="absolute bottom-[-1200px] right-[30px] text-[30px] font-katibeh flex gap-[200px]">
          <span>Tel: 000000</span>
          <span>Inst: mau.delivery</span>
        </div>
      </div>
      <Image
        className="absolute z-2 bottom-[-250px] left-[400px]"
        src="/images/bg-items/cats.png"
        alt=""
        width={350}
        height={350}
      />
      <Image
        className="absolute bottom-[-250px] left-[80px]"
        src="/images/bg-items/line.png"
        alt=""
        width={3}
        height={660}
      />
      <div className="font-katibeh text-[48px] bottom-[10px] left-[-35px] absolute rotate-[-90deg]">
        Navigate
      </div>
      <div className="font-katibeh text-[48px] px-[21px] absolute bottom-[-250px]">
        03
      </div>
      <div className="mt-[10px]">
        <h1 className="font-karantina text-[100px] text-center relative z-1">
          Our Team
        </h1>
        <ul className="relative z-1 mx-auto max-w-[1020px] flex justify-center flex-wrap gap-[70px]">
          <li className="w-[292px] h-[393px] bg-[#FAB735] rounded-4xl p-5 font-katibeh">
            <Image
              className="rounded-4xl"
              src="/images/team/viktor.png"
              alt="Developer"
              width={250}
              height={230}
            />
            <h1 className="text-[35px] mt-[-6px]">Viktor Luka</h1>
            <h3 className="text-[30px] text-right mt-[20px]">
              Fullstack Developer
            </h3>
          </li>
          <li className="w-[292px] h-[393px] bg-[#FAB735] rounded-4xl p-5 font-katibeh">
            <Image
              className="rounded-4xl"
              src="/images/icons/user.png"
              alt="???????"
              width={250}
              height={230}
            />
            <h1 className="text-[35px] mt-[-6px]">???????</h1>
            <h3 className="text-[30px] text-right mt-[20px]">???????</h3>
          </li>

          <li className="w-[292px] h-[393px] bg-[#FAB735] rounded-4xl p-5 font-katibeh">
            <Image
              className="rounded-4xl"
              src="/images/icons/user.png"
              alt="???????"
              width={250}
              height={230}
            />
            <h1 className="text-[35px] mt-[-6px]">???????</h1>
            <h3 className="text-[30px] text-right mt-[20px]">???????</h3>
          </li>

          <li className="w-[292px] h-[393px] bg-[#FAB735] rounded-4xl p-5 font-katibeh">
            <Image
              className="rounded-4xl"
              src="/images/team/zhenyok.png"
              alt="Designer"
              width={250}
              height={230}
            />
            <h1 className="text-[35px] mt-[-6px]">Yevheniya Marynchak</h1>
            <h3 className="text-[30px] text-right mt-[20px]">Designer</h3>
          </li>
          <li className="w-[292px] h-[393px] bg-[#FAB735] rounded-4xl p-5 font-katibeh">
            <Image
              className="rounded-4xl"
              src="/images/icons/user.png"
              alt="???????"
              width={250}
              height={230}
            />
            <h1 className="text-[35px] mt-[-6px]">???????</h1>
            <h3 className="text-[30px] text-right mt-[20px]">???????</h3>
          </li>
        </ul>
      </div>
      <div className="absolute left-[190px] bottom-[-250px] top-[-400px] z-0 overflow-hidden">
        <LongTrace />
      </div>
    </main>
  );
};

export default About;
