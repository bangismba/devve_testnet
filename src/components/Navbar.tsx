// src/components/Navbar.tsx
import { useState } from "react";
import ghunaghostLogo from "../assets/img/ghunaghostlogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={ghunaghostLogo}
            alt="Ghunaghost Tech Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <span className="hidden sm:block text-white font-bold text-lg">
            Ghunaghost Tech Ltd
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          <a
            href="#about"
            className="relative text-gray-200 hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="#services"
            className="relative text-gray-200 hover:text-blue-400 transition"
          >
            Services
          </a>
          <a
            href="#projects"
            className="relative text-gray-200 hover:text-blue-400 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="relative text-gray-200 hover:text-blue-400 transition"
          >
            Contact
          </a>
        </nav>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <img
            src={ghunaghostLogo}
            alt="Ghunaghost Tech Logo"
            className="w-10 h-10 object-contain"
          />
          <button onClick={() => setMenuOpen(false)}>
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex bg-gray-300 flex-col p-6 gap-6 text-lg font-medium">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
