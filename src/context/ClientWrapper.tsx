"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      disable: function () {
        return window.innerWidth < 1000;
      },
    });
  }, []);

  return <>{children}</>;
};

export default ClientWrapper;
