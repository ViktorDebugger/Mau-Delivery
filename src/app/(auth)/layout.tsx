import Quotes from "@/components/Quotes";
import ShortTrace from "@/components/ShortTrace";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="absolute right-[80px] bottom-0 top-0 z-0 overflow-hidden">
        <ShortTrace />
      </div>
      <div className="absolute left-[80px] bottom-0 top-0 z-0 overflow-hidden">
        <ShortTrace />
      </div>
      <div className="relative">
      {children}
      <Quotes />
      <div className="absolute rotate-[180deg]">
      <Quotes />
      </div>
      </div>
    </div>
  );
}
