import { useState, useEffect } from "react";

interface WindowProps {
  handleClose: () => void;
  isClosing: boolean;
  windowWidth: string;
  windowHeight: string;
  ChildComponent: React.ReactNode;
}

const Window = ({
  handleClose,
  isClosing,
  windowWidth,
  windowHeight,
  ChildComponent,
}: WindowProps) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setIsAnimating(false);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ease-in-out h-screen`}
    >
      <div
        className={`absolute inset-0 bg-[#F2680F]/50 transition-opacity duration-300 ease-in-out ${isClosing || isAnimating ? "opacity-0" : "opacity-100"} `}
        onClick={handleClose}
      />
      <div
        className={`relative rounded-4xl bg-[#FBE7BB] px-2 md:px-8 py-12 ${windowWidth} ${windowHeight} transform transition-all duration-300 ease-in-out ${
          isClosing || isAnimating
            ? "scale-95 opacity-0"
            : "scale-100 opacity-100"
        } `}
      >
        {" "}
        {ChildComponent}
      </div>
    </div>
  );
};

export default Window;
