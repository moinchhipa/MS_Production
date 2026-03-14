import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="font-poppins text-[0.9rem]! absolute top-0 left-0 w-full flex items-center justify-between py-4 px-6 md:px-10 lg:px-20 bg-transparent">
      {/* Logo */}
      <div className="cursor-pointer z-50 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
        <img
          className="w-[140px] md:w-[170px] lg:w-[200px]"
          src="/ms_logo_black.png"
          alt="Logo"
        />
      </div>

      {/* Desktop Menu (>=950px) */}
      <div className="hidden min-[950px]:block">
        <ul className="flex items-center gap-6">
          <li className="cursor-pointer hover:text-[#b49e64] transition">
            Photography
          </li>
          <li className="cursor-pointer hover:text-[#b49e64] transition">
            Films
          </li>
          <li className="cursor-pointer hover:text-[#b49e64] transition">
            Contact Us
          </li>
          <li className="cursor-pointer hover:text-[#b49e64] transition">
            Editorial
          </li>

          <li>
            <a
              className="text-black"
              href="https://www.instagram.com/ms_production_udr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram text-[1.2rem]! hover:text-[#b49e64] transition"></i>
            </a>
          </li>

          <li>
            <a
              className="text-black"
              href="http://www.youtube.com/@mehboobstudiophotography1283"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube text-[1.2rem]! hover:text-[#b49e64] transition"></i>
            </a>
          </li>

          <li>
            <button className="font-poppins bg-[#b49e64] px-4 py-[0.6rem] rounded text-white hover:opacity-80 transition">
              Get in Touch
            </button>
          </li>
        </ul>
      </div>

      {/* Hamburger (<950px) */}
      <button
        className="min-[950px]:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="min-[950px]:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-lg">
          <li className="list-none cursor-pointer">Photography</li>
          <li className="list-none cursor-pointer">Films</li>
          <li className="list-none cursor-pointer">Contact Us</li>
          <li className="list-none cursor-pointer">Editorial</li>

          <li className="list-none">
            <a
              className="text-black"
              href="https://www.instagram.com/ms_production_udr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>

          <li className="list-none">
            <a
              className="text-black"
              href="http://www.youtube.com/@mehboobstudiophotography1283"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>

          <button className="bg-[#b49e64] px-4 py-2 rounded text-white hover:opacity-80 transition">
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
