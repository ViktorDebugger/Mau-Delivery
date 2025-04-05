import { useEffect, useRef } from "react";
import SearchInput from "./SearchInput";
import Image from "next/image";
import DropDownFilter from "./DropDownFilter";

interface SearchInputProps {
  handle: () => void;
}

const WindowDishes = ({ handle }: SearchInputProps) => {
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        windowRef.current &&
        !windowRef.current.contains(event.target as Node)
      ) {
        handle();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-center fixed inset-0 z-[100] bg-[#F2680F]/50">
      <div
        className="bg-[#FBE7BB] rounded-4xl px-8 pt-8 pb-16 relative max-w-[740px]"
        ref={windowRef}
      >
        <div className="flex items-end gap-[30px]">
          <SearchInput handle={() => {}} />
          <DropDownFilter />
        </div>
        <ul className="flex justify-center flex-wrap mt-[30px] gap-[30px]">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <li key={item} className="flex-1/3 flex items-center gap-3 rounded-4xl">
              <Image
                src="/images/dishes/sushi.png"
                alt="dish"
                width={100}
                height={100}
              />
              <div className="font-katibeh">
                <h1 className="text-[35px] leading-0">Name restaurant</h1>
                <h2 className="text-[25px] leading-[2.3]">California sushi</h2>
                <p className="text-right text-[25px] leading-0">230 UAH</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WindowDishes;
