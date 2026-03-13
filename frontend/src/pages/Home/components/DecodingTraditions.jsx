function DecodingTraditions() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6">
        {/* Mobile / tablet layout */}
        <div className="lg:hidden">
          <header className="mb-8 text-center">
            <h1 className="font-soligant uppercase tracking-[0.22em] text-slate-900 text-[1.1rem]! sm:text-3xl md:text-4xl leading-tight">
              Decoding New Trends For Age <br /> Old Traditions
            </h1>
          </header>

          {/* Images side by side */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <figure className="h-44 mt-5 sm:h-64 md:h-[420px] overflow-hidden">
              <img
                src="/images/Decoding_trends/decoding_trends_1.jpg"
                alt="Wedding couple"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
            <figure className="h-44 sm:h-64 md:h-[420px] overflow-hidden">
              <img
                src="/images/Decoding_trends/hero.jpg"
                loading="lazy"
                alt="Wedding couple outdoor"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>

          {/* Copy below images */}
          <div className="font-poppins space-y-4 text-center text-sm sm:text-base leading-relaxed text-slate-800">
            <p>
              Specializing in contemporary photography and filmmaking, Ivory
              Films has been capturing the love and wedding stories of couples
              with unparalleled artistry. Our dedication lies in capturing your
              love story with elegance and precision.
            </p>

            <p>
              Each moment from your &quot;once in a lifetime&quot; event is
              meticulously selected and transformed into films and photographs
              you will treasure forever. Ivory Films, where every frame tells a
              story, and every story is a cherished memory.
            </p>

            <p>
              Ivory Films emerged from a profound passion for photography and an
              exceptional aptitude for managing clients and orchestrating grand
              events. Our journey commenced in 2013, and since then, we have
              adeptly captured the essence of numerous weddings and pre-wedding
              celebrations.
            </p>
          </div>
        </div>

        {/* Desktop editorial layout */}
        <div className="relative mx-auto max-w-[90vw] hidden lg:grid lg:grid-cols-3 lg:gap-10 xl:gap-14 lg:items-start">
          {/* Overlapping heading */}
          <header className="pointer-events-none absolute pt-5 -top--10 right-0 w-full flex justify-center tracking-wide z-20">
            <h2 className="font-soligant uppercase text-slate-900 text-4xl xl:text-7xl! leading-tight text-right">
              Decoding New Trends
              <br />
              For Age-Old Traditions
            </h2>
          </header>

          {/* Left image */}
          <figure className="pt-75 flex justify-start min-w-0">
            <img
              src="/images/Decoding_trends/decoding_trends_1.jpg"
              alt="Wedding couple outdoor"
              loading="lazy"
              className="w-full max-w-[400px] xl:max-w-[480px] h-[500px] xl:h-[600px] object-cover shadow-lg"
            />
          </figure>

          {/* Center copy */}
          <div className="font-poppins font-light pt-60 space-y-5 text-base leading-relaxed text-slate-800 max-w-md min-w-0">
            <p>
              Specializing in contemporary photography and filmmaking, Ivory
              Films has been capturing the love and wedding stories of couples
              with unparalleled artistry. Our dedication lies in capturing your
              love story with elegance and precision.
            </p>

            <p>
              Each moment from your &quot;once in a lifetime&quot; event is
              meticulously selected and transformed into films and photographs
              you will treasure forever. Ivory Films, where every frame tells a
              story, and every story is a cherished memory.
            </p>

            <p>
              Ivory Films emerged from a profound passion for photography and an
              exceptional aptitude for managing clients and orchestrating grand
              events. Our journey commenced in 2013, and since then, we have
              adeptly captured the essence of numerous weddings and pre-wedding
              celebrations.
            </p>
          </div>

          {/* Right image (heading overlaps this area) */}
          <figure className="flex justify-end min-w-0">
            <img
              src="/images/Decoding_trends/hero.jpg"
              alt="Wedding couple outdoor"
              loading="lazy"
              className="w-full max-w-[400px] xl:max-w-[480px] h-[500px] xl:h-[600px] object-cover shadow-lg"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default DecodingTraditions;
