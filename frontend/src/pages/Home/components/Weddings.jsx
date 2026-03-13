function Weddings() {
  return (
    <div className="mx-auto max-w-[90vw] py-16">
      <div className="text-center">
        <h1 className="font-soligant text-[1.5rem]! sm:text-[2.5rem]! md:text-[3rem]! lg:text-[3rem]! text-slate-900 leading-tight">
          Capturing the Madness and Chaos we call Weddings
        </h1>
      </div>
      <div className="font-poppins text-center mt-4 text-sm sm:text-base leading-relaxed text-slate-800">
        <p className="text-sm">
          Here, we present a meticulously curated collection of weddings from
          recent years, showcasing the authentic union of two souls in the most
          genuine and heartfelt manner imaginable.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        <div>
          <img src="/images/Weddings/Wedding_1.jpg" loading="lazy" alt="" />
          <div className="mt-4">
            <p className="text-[1rem]! m-0 tracking-wide text-semibold!">
              Yashvi X Karan
            </p>
            <p className="text-[0.8rem]! m-0">Mar 21, 2025</p>
          </div>
        </div>
        <div>
          <img src="/images/Weddings/Wedding_2.jpg" loading="lazy" alt="" />
          <div className="mt-4">
            <p className="text-[1rem]! m-0 tracking-wide text-semibold!">
              Yashvi X Karan
            </p>
            <p className="text-[0.8rem]! m-0">Mar 21, 2025</p>
          </div>
        </div>
        <div>
          <img src="/images/Weddings/Wedding_3.jpg" loading="lazy" alt="" />
          <div className="mt-4">
            <p className="text-[1rem]! m-0 tracking-wide text-semibold!">
              Yashvi X Karan
            </p>
            <p className="text-[0.8rem]! m-0">Mar 21, 2025</p>
          </div>
        </div>
        <div>
          <img src="/images/Weddings/Wedding_4.jpg" loading="lazy" alt="" />
          <div className="mt-4">
            <p className="text-[1rem]! m-0 tracking-wide text-semibold!">
              Yashvi X Karan
            </p>
            <p className="text-[0.8rem]! m-0">Mar 21, 2025</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <button className="bg-[#b49e64] px-4 py-[0.8rem] rounded text-white hover:opacity-80 transition">Explore Photography</button>
      </div>
    </div>
  );
}

export default Weddings;
