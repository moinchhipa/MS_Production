function GetInTouch() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src="/images/msp.jpg"
        alt="Get In Touch"
        className="absolute w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-20">
        <div className="max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] text-right text-white">

          <h2 className="font-soligant text-[2rem]! sm:text-[2.5rem]! md:text-[3.5rem]! lg:text-[4rem]! leading-tight mb-6">
            We would love to hear from you
          </h2>

          <p className="font-poppins text-sm md:text-base lg:text-[1rem]! ml-0 sm:ml-[6rem]! md:ml-[12rem]! lg:ml-[17rem]! mb-8 leading-relaxed">
            We try to get to know our clients and build a genuine connection
            with them before the big day. It's not just about taking the best
            photos & videos — it's also about how we make our clients feel.
            The experience from the first initial connection to the final
            deliverables; we make sure everything is consistent and flawless.
          </p>

          <button className="font-poppins bg-[#c8a96a] hover:opacity-80 px-4 py-2 rounded font-medium transition">
            Get In Touch
          </button>

        </div>
      </div>

    </section>
  );
}

export default GetInTouch;