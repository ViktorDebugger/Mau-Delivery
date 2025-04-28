"use client";

import VerticalTrace from "@/components/Decorations/VerticalTrace";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="absolute top-0 right-20 bottom-0 z-0 hidden overflow-hidden sm:block">
        <VerticalTrace />
      </div>
      <div className="absolute top-0 bottom-0 left-20 z-0 hidden overflow-hidden sm:block">
        <VerticalTrace />
      </div>

      {children}
    </div>
  );
};

export default AuthLayout;
