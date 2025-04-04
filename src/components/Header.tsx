import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-[#FFCA8DB2] w-full h-[114px]">
      <div className="flex items-center py-1 px-8">
        <Image
          src="/images/logo.png"
          alt="MAU Delivery Logo"
          width={100}
          height={100}
        />
        <div className="bg-[#FFBA26] rounded-4xl h-[40px] w-[277px] flex items-center justify-between pr-3 pl-4 px-3 ml-16 -mt-4">
          <input
            type="text"
            className="focus:outline-none font-katibeh  text-[23px] -mt-1 leading-[0.9]"
          />
          <button className="cursor-pointer">
            <Image
              src="/images/search.png"
              alt="search"
              width={25}
              height={25}
            />
          </button>
        </div>
        <nav className="ml-auto -mt-4">
          <ul className="flex items-center font-katibeh text-[32px] gap-[40px]">
            <li className="cursor-pointer">
              <Image
                src="/images/basket.png"
                alt="basket"
                width={50}
                height={50}
              />
            </li>
            <li className="mt-2 h-[50px] hover:bg-[#FFBA26] transition ease-in-out duration-300 px-5 rounded-4xl flex justify-center items-center cursor-pointer">
              <span className="h-full -mt-[10px]">About Us</span>
            </li>
            <li className="mt-2 h-[50px] hover:bg-[#FFBA26] transition ease-in-out duration-300 px-5 rounded-4xl flex justify-center items-center cursor-pointer">
            <span className="h-full -mt-[10px]">Home</span>
            </li>
            <li className="mt-2 h-[50px] hover:bg-[#FFBA26] transition ease-in-out duration-300 px-5 rounded-4xl flex justify-center items-center cursor-pointer">
            <span className="h-full -mt-[10px]">Account</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
