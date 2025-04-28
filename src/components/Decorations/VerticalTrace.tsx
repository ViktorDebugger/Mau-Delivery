import Image from "next/image";
import rightTrace from "../../../public/images/bg-items/right-trace.png";
import leftTrace from "../../../public/images/bg-items/left-trace.png";

const VerticalTrace = () => {
  return (
    <div className="animate-infinite-scroll-vertical overflow-hidden flex flex-col gap-[100px]">
      <div className="flex flex-col gap-[100px]">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex flex-col gap-[100px]">
            <Image src={rightTrace} alt="" width={130} height={300} />
            <Image src={leftTrace} alt="" width={130} height={300} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTrace;
