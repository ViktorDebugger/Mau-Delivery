import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const DropDownFilter = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleOpen() {
    setIsOpen((o) => !o);
  }

  return (
    <div className="relative" ref={menuRef}>
      <div
        onClick={() => handleOpen()}
        className={`flex flex-col cursor-pointer hover:bg-[#ffb7587d] transition ease-in-out duration-300 px-2 py-2 rounded-4xl ${
          isOpen ? "bg-[#ffb7587d]" : "bg-none"
        }`}
      >
        <button className="cursor-pointer">
          <Image
            src="/images/icons/filter.png"
            alt="filter"
            width={25}
            height={25}
          />
        </button>
      </div>
      <div
        className={`absolute py-4 px-5 z-3 top-[50px] left-[30px] w-[220px] bg-[#FAB735] rounded-4xl p-4 shadow-lg transition-all ease-in-out duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-[-10px] invisible pointer-events-none"
        }`}
      >

        <div className="font-katibeh text-[25px]">
            <p className="text-center leading-[0.5]">Price</p>
            <div className="flex items-center justify-center gap-[10px] mt-3">
                <div className="bg-[#F2680F] rounded-4xl w-[66px] h-[26px]"></div>
                <div className="-mt-2">—</div>
                <div className="bg-[#F2680F] rounded-4xl w-[66px] h-[26px]"></div>
            </div>
        </div>
        <div className="font-katibeh text-[25px] mt-2">
            <p className="text-center leading-[0.5]">Rating</p>
            <div className="flex items-center justify-center gap-[10px] mt-3">
                <div className="bg-[#F2680F] rounded-4xl w-[66px] h-[26px] leading-4 text-center text-xl">Top</div>
                <div className="-mt-2">—</div>
                <div className="bg-[#F2680F] rounded-4xl w-[66px] h-[26px] leading-4 text-center text-xl">Worst</div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default DropDownFilter;
