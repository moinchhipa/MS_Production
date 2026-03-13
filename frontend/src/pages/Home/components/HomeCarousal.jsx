import { useEffect, useState } from "react";

const SLIDES = [
  {
    id: 1,
    src: "/images/Home_Carausal/home_carousel_1.jpg",
    alt: "Elegant wedding couple",
  },
  {
    id: 2,
    src: "/images/Home_Carausal/home_carousel_2.jpg",
    alt: "Bride and groom celebration",
  },
  {
    id: 3,
    src: "/images/Home_Carausal/home_carousel_3.jpg",
    alt: "Luxury wedding details",
  },
  {
    id: 4,
    src: "/images/Home_Carausal/home_carousel_4.jpg",
    alt: "Romantic wedding moment",
  }
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
    <section className="relative w-full aspect-[16/9] overflow-hidden">
      {/* Slides */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div key={slide.id} className="min-w-full h-full">
            <img
              src={slide.src}
              alt={slide.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full! border border-white ${
              current === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HomeCarousal;
