function DecodingTraditions() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300;400;600&family=Cormorant+Garamond:wght@300;400;500&display=swap');
        .font-cormorant-sc { font-family: 'Cormorant SC', serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
      `}</style>

      <div className="font-cormorant min-h-screen mt-5">
        {/* Heading */}
        <div className="text-center pt-12 pb-0 px-6 md:px-8">
          <h1
            className="font-soligant mb-5 uppercase font-normal leading-tight tracking-widest text-gray-900
          text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
          >
            Decoding New Trends
            <br />
            for Age-Old Traditions
          </h1>
        </div>

        {/* Three column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto px-6 md:px-8 pb-16 items-center gap-10 md:gap-0">
          {/* Left image */}
          <div className="flex justify-center md:justify-start md:items-end h-full">
            <img
              src="/images/decoding_trends_1.jpg"
              alt="Wedding couple"
              className="w-full max-w-sm object-cover h-[420px] md:h-[560px]"
            />
          </div>

          {/* Center text */}
          <div className="px-2 font-cormorant md:px-10 py-4 md:py-8 self-center text-center md:text-left">
            <p className="font-cormorant text-sm md:text-base leading-relaxed text-gray-700 mb-5 tracking-wide">
              Specializing in contemporary photography and filmmaking, Ivory
              Films has been capturing the love and wedding stories of couples
              with unparalleled artistry. Our dedication lies in capturing your
              love story with elegance and precision.
            </p>

            <p className="font-cormorant text-sm md:text-base leading-relaxed text-gray-700 mb-5 tracking-wide">
              Each moment from your "once in a lifetime" event is meticulously
              selected and transformed into films and photographs you will
              treasure forever. Ivory Films, where every frame tells a story,
              and every story is a cherished memory.
            </p>

            <p className="font-cormorant text-sm md:text-base leading-relaxed text-gray-700 tracking-wide">
              Ivory Films emerged from a profound passion for photography and an
              exceptional aptitude for managing clients and orchestrating grand
              events. Our journey commenced in 2013, and since then, we have
              adeptly captured the essence of numerous weddings and pre-wedding
              celebrations.
            </p>
          </div>

          {/* Right image */}
          <div className="flex justify-center md:justify-end md:items-start h-full">
            <img
              src="/images/decoding_trends_2.jpg"
              alt="Wedding couple outdoor"
              className="w-full max-w-sm object-cover h-[420px] md:h-[560px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DecodingTraditions;
