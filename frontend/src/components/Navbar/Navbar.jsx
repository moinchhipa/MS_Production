import { useState, useRef, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{ padding: "0 100px" }}
      className="font-garamond absolute top-0 left-0 w-full flex flex-row items-center justify-between py-4 bg-transparent"
    >
      <div className="cursor-pointer z-50">
        <img style={{ width: "200px" }} src="/ms_logo_black.png" alt="" />
      </div>
      <div className="hidden md:block">
        <ul className="list-none flex flex-row items-center justify-center gap-4">
          <li className="cursor-pointer">Photography</li>
          <li className="cursor-pointer">Films</li>
          <li className="cursor-pointer">Contanct Us</li>

          <li className="cursor-pointer">Editorial</li>

          <li className="cursor-pointer">
            <a
              className="text-black"
              href="https://www.instagram.com/ms_production_udr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              className="text-black"
              href="http://www.youtube.com/@mehboobstudiophotography1283"
              target="_blank"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <button
              style={{ borderRadius: "5px" }}
              className="bg-[#b49e64] px-3 py-2 text-white hover:bg-[#B49E64] hover:opacity-75"
            >
              Get in Touch
            </button>
          </li>
        </ul>
      </div>

      <button
        className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer z-50 absolute right-6"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
        />
      </button>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-6">
          <li className="cursor-pointer list-none">Photography</li>
          <li className="cursor-pointer list-none">Films</li>
          <li className="cursor-pointer list-none">Contact Us</li>
          <li className="cursor-pointer list-none">Editorial</li>
          <li className="cursor-pointer list-none">
            <a
              className="text-black"
              href="https://www.instagram.com/ms_production_udr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="cursor-pointer list-none">
            <a
              className="text-black"
              href="http://www.youtube.com/@mehboobstudiophotography1283"
              target="_blank"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <button
            style={{ borderRadius: "5px" }}
            className="bg-[#b49e64] px-3 py-2 text-white hover:opacity-75"
          >
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
