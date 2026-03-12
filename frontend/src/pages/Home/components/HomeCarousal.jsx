import { useEffect, useState } from "react";

const SLIDES = [
  {
    id: 1,
    src: "/images/home_carousel_1.jpg",
    alt: "Elegant wedding couple",
  },
  {
    id: 2,
    src: "/images/home_carousel_2.jpg",
    alt: "Bride and groom celebration",
  },
  {
    id: 3,
    src: "/images/home_carousel_3.jpg",
    alt: "Luxury wedding details",
  },
];

function HomeCarousal() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (SLIDES.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 flex transition-transform duration-700 ease-out"
           style={{ transform: `translateX(-${current * 100}%)` }}>
        {SLIDES.map((slide) => (
          <div key={slide.id} className="w-screen h-screen flex-shrink-0">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Simple dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full border border-white/70 transition-colors ${
              current === index ? "bg-white" : "bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* Gradient overlay for readability (optional) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
    </section>
  );
}

export default HomeCarousal;

