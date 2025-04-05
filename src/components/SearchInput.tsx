import Image from "next/image";

interface SearchInputProps {
  handle: () => void;
}

const SearchInput = ({ handle }: SearchInputProps) => {
  return (
    <div className="bg-[#FFBA26] rounded-4xl w-[277px] flex items-center justify-between py-2 pr-3 pl-4 ml-16 -mt-4">
      <input
        type="text"
        className="focus:outline-none font-katibeh text-[23px] -mt-1 leading-[0.9]"
      />
      <button onClick={handle} className="cursor-pointer">
        <Image
          src="/images/icons/search.png"
          alt="search"
          width={25}
          height={25}
        />
      </button>
    </div>
  );
};

export default SearchInput;
