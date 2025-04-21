"use client";

import { useEffect } from 'react';

import Quotes from "@/components/Decorations/Quotes";
import VerticalTrace from "@/components/Decorations/VerticalTrace";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="absolute top-0 right-20 bottom-0 z-0 overflow-hidden hidden sm:block">
        <VerticalTrace />
      </div>
      <div className="absolute top-0 bottom-0 left-20 z-0 overflow-hidden hidden sm:block">
        <VerticalTrace />
      </div>
      <div className="relative">
        <div className="relative hidden sm:block right-4 -top-2 md:-top-1">
          <Quotes />
        </div>
        {children}

        <div className="absolute rotate-[180deg] hidden sm:block left-4 -bottom-2 md:-bottom-1">
          <Quotes />
        </div>
      </div>
    </div>
  );
}
