"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
  faTelegram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import cats from "../../../public/images/bg-items/cats.png";
import bgItem04 from "../../../public/images/bg-items/bg-item-4.png";
import logo from "../../../public/images/logo.png";

const Footer = () => {
  const pathname = usePathname();

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative z-10 mt-46 w-full">
      <Image
        className="absolute -top-58 right-10 z-100 md:-top-[230px] md:right-1/2 lg:-top-50"
        src={cats}
        alt=""
        width={250}
        data-aos="fade-up"
        data-aos-offset="200"
      />

      <Image
        className="absolute -top-44 right-0 z-0 hidden md:block"
        src={bgItem04}
        alt=""
        width={550}
        data-aos="fade-up"
        data-aos-offset="200"
      />

      <div className="relative z-20 w-full rounded-t-4xl bg-[#FFCA8D] px-4 py-4 xl:px-16">
        <div className="grid grid-cols-1 items-center justify-items-center gap-4 text-3xl md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-1">
            {pathname === "/" ? (
              <button
                className="h-16 w-16 cursor-pointer md:h-20 md:w-20"
                onClick={handleLogoClick}
              >
                <Image
                  src={logo}
                  alt="MAU Delivery Logo"
                  width={80}
                  height={80}
                  priority
                  loading="eager"
                />
              </button>
            ) : (
              <Link
                href={`/`}
                className="h-16 w-16 cursor-pointer md:h-20 md:w-20"
              >
                <Image
                  src={logo}
                  alt="MAU Delivery Logo"
                  width={80}
                  height={80}
                  priority
                  loading="eager"
                />
              </Link>
            )}

            <p className="text-xl xl:text-2xl">
              Fast and Reliable Food Delivery
            </p>
          </div>

          <p className="text-2xl xl:text-3xl">+38 (093) 459 9239</p>
          <p className="text-2xl xl:text-3xl">support@mau-delivery.com</p>

          <div className="flex gap-4">
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                width={32}
                height={32}
                className="transition-colors duration-300 ease-in-out hover:text-[#374151]"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                width={32}
                height={32}
                className="transition-colors duration-300 ease-in-out hover:text-[#374151]"
              />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTelegram}
                width={32}
                height={32}
                className="transition-colors duration-300 ease-in-out hover:text-[#374151]"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                width={32}
                height={32}
                className="transition-colors duration-300 ease-in-out hover:text-[#374151]"
              />
            </a>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 border-t border-t-[#374151] py-4 text-2xl md:grid-cols-2">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} MAU Delivery. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Made with care for delicious experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
