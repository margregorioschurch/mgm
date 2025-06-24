"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Booking", href: "/booking" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isSticky
          ? "fixed top-0 w-full bg-neutral-dark/95 backdrop-blur-md shadow-lg"
          : "absolute inset-x-0 top-0 bg-neutral-dark/90 backdrop-blur-sm shadow-md"
      } z-50 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between p-4 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/img/logo/oie_qTSaQBp0mY24.png"
            alt="Logo"
            className="h-15 w-auto"
          />
        </Link>

        {/* Hamburger Button */}
        <button
          className="lg:hidden z-50"
          onClick={() => setOpen(!open)}
          type="button"
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon
            icon={open ? faTimes : faBars}
            className="text-2xl"
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:w-auto items-center space-x-6">
          <ul className="flex space-x-6 font-bold">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-orange-300 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:04692668858"
            className="bg-brand hover:bg-brand-dark py-2 px-4 rounded-lg shadow border border-orange-900 hover:border-orange-700 transition"
          >
            <FontAwesomeIcon icon={faPhone} className="mr-2 hover:text-orange-700" />
            0469‑2668858
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-full inset-x-0 w-auto bg-orange-800/90 backdrop-blur-sm p-1 shadow-lg lg:hidden">
            <ul className="flex flex-col p-4 space-y-3 text-white">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 px-3 rounded hover:text-orange-300 transition"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="tel:04692668858"
                  className="flex items-center justify-center space-x-2 bg-brand hover:bg-brand-dark text-white py-2 px-4 rounded shadow border border-orange-900 hover:border-orange-700 transition"
                >
                  <FontAwesomeIcon icon={faPhone} />
                  <span>0469‑2668858</span>
                </a>
              </li>
              <li className="flex justify-center">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
