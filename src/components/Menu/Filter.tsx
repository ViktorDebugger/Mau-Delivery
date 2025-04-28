import { useState, useRef, useEffect } from "react";
import { SlidersHorizontal } from "lucide-react";

interface FilterProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterValues) => void;
  onOpen: () => void;
}

export interface FilterValues {
  minPrice: number | null;
  maxPrice: number | null;
  minRating: number | null;
  maxRating: number | null;
}

const Filter = ({ isOpen, onClose, onApply, onOpen }: FilterProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [minRating, setMinRating] = useState<number | "">("");
  const [maxRating, setMaxRating] = useState<number | "">("");

  useEffect(() => {
    const handleClickOutsideMenu = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [onClose]);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setMinPrice("");
    } else {
      const num: number = parseFloat(value);
      if (!isNaN(num) && num >= 0) {
        setMinPrice(num);
      }
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setMaxPrice("");
    } else {
      const num = parseFloat(value);
      if (!isNaN(num) && num >= 0) {
        setMaxPrice(num);
      }
    }
  };

  const handleMinRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setMinRating("");
    } else {
      const num = parseFloat(value);
      if (!isNaN(num) && num >= 0 && num <= 5) {
        setMinRating(num);
      }
    }
  };

  const handleMaxRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setMaxRating("");
    } else {
      const num = parseFloat(value);
      if (!isNaN(num) && num >= 0 && num <= 5) {
        setMaxRating(num);
      }
    }
  };

  const applyFilters = () => {
    onApply({
      minPrice: minPrice === "" ? null : Number(minPrice),
      maxPrice: maxPrice === "" ? null : Number(maxPrice),
      minRating: minRating === "" ? null : Number(minRating),
      maxRating: maxRating === "" ? null : Number(maxRating),
    });
    onClose();
  };

  const clearFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setMinRating("");
    setMaxRating("");
    onApply({
      minPrice: null,
      maxPrice: null,
      minRating: null,
      maxRating: null,
    });
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={isOpen ? onClose : onOpen}
        className={`flex cursor-pointer flex-col rounded-4xl px-2 py-2 transition duration-300 ease-in-out hover:bg-[#FAB735]/60 ${
          isOpen ? "bg-[#FAB735]/60" : "bg-none"
        }`}
      >
        <SlidersHorizontal />
      </button>

      <div
        className={`absolute top-12 right-0 z-3 w-58 rounded-4xl border-4 border-[#F2680F] bg-[#FAB735] py-4 shadow-lg transition-all duration-300 ease-in-out md:-right-24 ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="text-2xl">
          <p className="text-center leading-[0.5]">Price</p>
          <div className="mt-3 flex items-center justify-center gap-[10px]">
            <input
              type="number"
              className="h-7 w-16 [appearance:textfield] rounded-4xl bg-[#F2680F] text-center outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={minPrice}
              onChange={handleMinPriceChange}
              placeholder="Min"
              min="0"
              step="0.01"
            />
            <div className="-mt-2">—</div>
            <input
              type="number"
              className="h-7 w-16 [appearance:textfield] rounded-4xl bg-[#F2680F] text-center outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              placeholder="Max"
              min="0"
              step="0.01"
            />
          </div>
        </div>
        <div className="mt-2 text-2xl">
          <p className="text-center leading-[0.5]">Rating</p>
          <div className="mt-3 flex items-center justify-center gap-[10px]">
            <input
              type="number"
              className="h-7 w-16 [appearance:textfield] rounded-4xl bg-[#F2680F] text-center outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={minRating}
              onChange={handleMinRatingChange}
              placeholder="1"
              min="0"
              max="5"
              step="0.1"
            />
            <div className="-mt-2">—</div>
            <input
              type="number"
              className="h-7 w-16 [appearance:textfield] rounded-4xl bg-[#F2680F] text-center outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={maxRating}
              onChange={handleMaxRatingChange}
              placeholder="5"
              min="0"
              max="5"
              step="0.1"
            />
          </div>
        </div>
        <div className="mx-4 mt-4 grid grid-cols-2 justify-center gap-2">
          <button
            onClick={clearFilters}
            className="cursor-pointer rounded-4xl bg-[#F2680F] px-4 text-2xl transition-colors duration-300 ease-in-out hover:bg-[#F2570F]"
          >
            Clear
          </button>
          <button
            onClick={applyFilters}
            className="cursor-pointer rounded-4xl bg-[#F2680F] px-4 text-2xl transition-colors duration-300 ease-in-out hover:bg-[#F2570F]"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
