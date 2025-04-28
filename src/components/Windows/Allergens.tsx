import { X } from "lucide-react";

interface WindowAllergensProps {
  handleClose: () => void;
  allergens: string[];
  onConfirm: () => void;
}

const Allergens = ({
  handleClose,
  allergens,
  onConfirm,
}: WindowAllergensProps) => {
  return (
    <div className="relative p-6">
      <button
        onClick={handleClose}
        className="absolute -top-6 right-3 block md:hidden"
      >
        <X size={32} />
      </button>

      <h1 className="font-karantina text-center text-5xl md:text-6xl">
        Allergens Warning
      </h1>

      <p className="mt-4 text-center text-2xl">
        This dish contains the following allergens:
      </p>
      <ul className="mt-4 list-disc pl-6 text-3xl">
        {allergens.map((allergen, index) => (
          <li key={index}>{allergen}</li>
        ))}
      </ul>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={onConfirm}
          className="cursor-pointer rounded-full bg-[#FAB735] px-6 py-2 text-2xl transition-colors duration-300 ease-in-out hover:bg-[#F2A30F]"
        >
          Add to Cart Anyway
        </button>
      </div>
    </div>
  );
};

export default Allergens;
