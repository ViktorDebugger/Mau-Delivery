import Image from "next/image";

import topTrace from "../../../public/images/bg-items/top-trace.png";
import downTrace from "../../../public/images/bg-items/down-trace.png";

const HorizontalTrace = () => {
  return (
      <div className="absolute right-0 left-0 flex overflow-hidden">
        <ul className="animate-infinite-scroll-horizontal flex gap-20">
          {[...Array(20), ...Array(20)].map((_, index) => {
            return (
              <li key={index} className="w-20 h-50">
                <Image src={index % 2 ? downTrace : topTrace} alt="" width={80} height={200} />
              </li>
            );
          })}
        </ul>
      </div>
  );
};

export default HorizontalTrace;
