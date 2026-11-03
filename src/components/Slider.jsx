
import { useState, useEffect } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=2000&q=85",
    line1: "Restore Balance",
    line2: "Renew Your Spirit",
  },
  {
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=85",
    line1: "Find Your Peace",
    line2: "Reconnect Within",
  },
  {
    img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=2000&q=85",
    line1: "Move With Purpose",
    line2: "Live With Balance",
  },
];

export default function Slider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[700px] w-full overflow-hidden bg-[#252c20] md:h-screen md:min-h-[700px]"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            active === index
              ? "z-10 opacity-100"
              : "z-0 opacity-0"
          }`}
        >
          <img
            src={slide.img}
            alt="Yoga and wellness"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

          <div className="relative mx-auto flex h-full max-w-[1600px] items-center px-6 pb-10 pt-24 md:px-20">
            <div className="max-w-4xl text-white">
              <p className="mb-5 text-sm font-medium uppercase tracking-[4px] text-white/80">
                Welcome to Flowra
              </p>

              <h1 className="font-serif text-5xl font-medium leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
                {slide.line1}
                <br />
                {slide.line2}
              </h1>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-4 rounded bg-[#916b55] px-6 py-4 text-xs font-semibold tracking-wider text-white transition hover:bg-[#76533f]"
                >
                  UNWIND WITH US <span>→</span>
                </a>

                <a
                  href="#classes"
                  className="inline-flex items-center gap-4 rounded bg-white px-6 py-4 text-xs font-semibold tracking-wider text-black transition hover:bg-gray-200"
                >
                  DISCOVER OUR CLASSES <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-6 z-20 flex items-center gap-4 text-white md:left-9">
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
            alt=""
            className="h-11 w-11 rounded-full border-2 border-white object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
            alt=""
            className="-ml-3 h-11 w-11 rounded-full border-2 border-white object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100&q=80"
            alt=""
            className="-ml-3 h-11 w-11 rounded-full border-2 border-white object-cover"
          />
          <a
            href="#about"
            aria-label="About us"
            className="-ml-2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-black"
          >
            ↗
          </a>
        </div>

        <p className="hidden text-sm leading-6 sm:block">
          <strong>1.5K+</strong> people supported
          <br />
          on their wellness journey
        </p>
      </div>

      <div className="absolute bottom-10 right-6 z-20 flex gap-2 md:right-9">
        {[
          ["f", "Facebook"],
          ["𝕏", "X"],
          ["▶", "YouTube"],
          ["◎", "Instagram"],
        ].map(([symbol, name]) => (
          <a
            key={name}
            href="#contact"
            aria-label={name}
            className="flex h-10 w-10 items-center justify-center rounded border border-white/50 text-sm text-white transition hover:bg-white hover:text-black"
          >
            {symbol}
          </a>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 z-20 flex w-full gap-1 px-6 pb-1">
        {slides.map((slide, index) => (
          <button
            key={slide.img}
            onClick={() => setActive(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-1 flex-1 transition-colors ${
              active === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
