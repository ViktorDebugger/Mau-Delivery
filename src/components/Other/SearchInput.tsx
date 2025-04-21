import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const SearchInput = ({ value, onChange, onSearch }: SearchInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="flex w-70 md:w-72 items-center rounded-4xl bg-[#FAB735] pl-3">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyPress}
        className="text-2xl leading-[0.9] focus:outline-none"
      />
      <button
        onClick={onSearch}
        className="cursor-pointer rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-[#F2A30F]"
      >
        <Search size={32} />
      </button>
    </div>
  );
};

export default SearchInput;
