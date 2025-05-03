import Image from "next/image";
import rightTrace from "../../../public/images/bg-items/right-trace.png";
import leftTrace from "../../../public/images/bg-items/left-trace.png";

const VerticalTrace = () => {
  return (
    <div className="animate-infinite-scroll-vertical flex flex-col gap-[100px] overflow-hidden">
      <ul className="flex flex-col gap-[100px]">
        {[...Array(5), ...Array(5)].map((_, index) => {
          return (
            <li key={index} className="flex flex-col gap-[100px]">
              <figure className="w-full h-full">
                <Image
                  src={index % 2 ? rightTrace : leftTrace}
                  alt=""
                  width={130}
                />
              </figure>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VerticalTrace;
