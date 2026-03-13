function Footer() {
  return (
    <div className="mx-auto max-w-[80vw] py-16">
      <div className="flex justify-between items-center">
        <div>
          <ul>
            <li className="cursor-pointer">Contanct Us</li>
          </ul>
        </div>
        <div>
          <img
            className="w-[140px] md:w-[170px] lg:w-[200px] border-l-1 border-r-1"
            src="/ms_logo_black.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="text-[1.3rem]">
            <a
              className="text-black"
              href="https://www.instagram.com/ms_production_udr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div>
            <a className="no-underline! text-black" href="tel:+918696521570">+91 8696521570</a>
          </div>
          <div>
            <a className="no-underline! text-black" href="mailto:msproduction@com">hello@msproduction.in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
