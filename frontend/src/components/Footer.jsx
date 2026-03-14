function Footer() {
  return (
    <div className="mx-auto max-w-[90vw] pt-16">
      {/* Mobile / Tablet layout */}
      <div className="lg:hidden">
        {/* Logo centered */}
        <div className="flex justify-center mb-10">
          <img
            className="w-[140px] md:w-[170px]"
            src="/ms_logo_black.png"
            alt="MS Production Logo"
          />
        </div>

        {/* Contact + Details */}
        <div className="flex justify-center gap-16 text-center">
          {/* Contact Us */}
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-[1rem] tracking-wide cursor-pointer hover:text-[#b49e64] transition-all duration-300">
              Contact Us
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4 items-center">
            <a
              className="text-[1.4rem] text-black hover:text-[#b49e64] transition-all duration-300 hover:scale-110"
              href="https://www.instagram.com/ms_production_udr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              className="no-underline! text-black hover:text-[#b49e64]! transition-all duration-300"
              href="tel:+918696521570"
            >
              +91 8696521570
            </a>

            <a
              className="no-underline! text-black hover:text-[#b49e64]! transition-all duration-300"
              href="mailto:hello@msproduction.in"
            >
              hello@msproduction.in
            </a>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex justify-around items-center flex-row gap-10">
        {/* Contact */}
        <div>
          <ul>
            <li className="cursor-pointer text-[1rem] hover:text-[#b49e64] transition-all duration-300">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div>
          <img
            className="w-[250px]"
            src="/ms_logo_black.png"
            alt="MS Production Logo"
          />
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="text-[1.3rem]">
            <a
              className="text-black"
              href="https://www.instagram.com/ms_production_udr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram hover:text-[#b49e64] transition-all duration-300"></i>
            </a>
          </div>

          <div>
            <a
              className="no-underline! text-black hover:text-[#b49e64]! transition-all duration-300"
              href="tel:+918696521570"
            >
              +91 8696521570
            </a>
          </div>

          <div>
            <a
              className="no-underline! text-black hover:text-[#b49e64]! transition-all duration-300"
              href="mailto:hello@msproduction.in"
            >
              hello@msproduction.in
            </a>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-t border-[#b49e64] mt-18 pt-8 mb-4">
        <p className="text-center text-gray-500 uppercase tracking-wide text-sm">
          &copy; {new Date().getFullYear()} MS Production. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
