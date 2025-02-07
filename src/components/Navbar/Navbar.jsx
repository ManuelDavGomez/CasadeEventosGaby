"use client";
import { useState } from "react";
import Link from "next/link";
import "./navbar.css";
import Logo from "../../assets/image/Logo.png";
import { useCart } from "../../context/CartContext";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { getTotalQuantity } = useCart();

  return (
    <nav className="bg-white text-black fixed top-0 w-full z-50 shadow-xl">
      <section className="max-w-[95%] mx-auto px-4">
        <section className="flex justify-between items-center h-14">
          <Link href="/pages/carts" className="cursor-pointer">
            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 inline"
                viewBox="0 0 512 512"
              >
                <path
                  d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                  data-original="#000"
                ></path>
              </svg>
              <span className="absolute left-auto -ml-1 -top-2 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                {getTotalQuantity()}
              </span>
            </span>
          </Link>
          <div className="flex items-center">
            <a href="/" className="font-bold text-black">
              <Image
                src={Logo}
                alt=""
                width={200}
                height={200}
                loading="lazy"
              />
            </a>
          </div>

          <div className="hidden md:flex space-x-4">
            <a
              href="/"
              className="px-3 py-2 rounded-md font-medium hover:bg-[#ffd700] transition duration-300"
            >
              Inicio
            </a>
            <Link
              href="/pages/dresses"
              className="px-3 py-2 rounded-md font-medium hover:bg-[#ffd700] transition duration-300"
            >
              Vestidos
            </Link>
            <Link
              href="/pages/cita"
              className="px-3 py-2 rounded-md font-medium hover:bg-[#ffd700] transition duration-300"
            >
              Agenda tu Cita
            </Link>
            <Link
              href="/pages/contact"
              className="px-3 py-2 rounded-md font-medium hover:bg-[#ffd700] transition duration-300"
            >
              Contacto
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-black"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </section>
      </section>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#ffd700] transition duration-300"
            >
              Inicio
            </Link>
            <Link
              href="/pages/dresses"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#ffd700] transition duration-300"
            >
              Vestidos
            </Link>
            <Link
              href="/pages/cita"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#ffd700] transition duration-300"
            >
              Cita
            </Link>
            <Link
              href="/pages/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#ffd700] transition duration-300"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
