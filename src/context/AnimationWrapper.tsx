"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      disable: () => {
        return window.innerWidth < 1000;
      },
    });
  }, []);

  return <>{children}</>;
};

export default AnimationWrapper;
