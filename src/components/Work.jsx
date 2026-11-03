
const classes = [
  {
    name: "Vinyasa Flow",
    text: "A smooth sequence of movements that builds strength and flexibility.",
    level: "Beginner",
    time: "60 Minutes",
    icon: "♡",
    img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Hatha Yoga",
    text: "A gentle practice focused on basic poses, breathing, and relaxation.",
    level: "All Levels",
    time: "60 Minutes",
    icon: "♧",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Yin Yoga",
    text: "Slow-paced stretches that improve flexibility and release tension.",
    level: "Beginner",
    time: "60 Minutes",
    icon: "☾",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Work() {
  return (
    <section
      id="classes"
      className="relative overflow-hidden bg-[#f0e7e2] px-6 py-20 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-5 text-sm font-medium tracking-wide text-[#95694f]">
            OUR CLASSES
          </p>

          <h2 className="mx-auto max-w-2xl font-serif text-4xl font-normal leading-tight text-[#25291f] md:text-5xl">
            Explore Mindful Classes To
            <br className="hidden sm:block" />
            Strengthen Your Body
          </h2>
        </div>

        {/* Class Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {classes.map((c) => (
            <div
              key={c.name}
              className="group relative h-[450px] overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

              {/* Top Icon */}
              <div className="absolute left-2 top-2 flex h-12 w-12 items-center justify-center rounded-md bg-white text-3xl text-[#95694f]">
                {c.icon}
              </div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white md:p-7">

                <h3 className="mb-2 font-serif text-2xl font-semibold">
                  {c.name}
                </h3>

                <p className="mb-4 text-sm leading-6 text-white/90">
                  {c.text}
                </p>

                {/* Level and Duration */}
                <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
                  <span className="flex items-center gap-2">
                    <span className="text-lg">♙</span>
                    {c.level}
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="text-lg">◷</span>
                    {c.time}
                  </span>
                </div>

                {/* Button */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded bg-white px-6 py-3 text-xs font-medium text-black transition hover:bg-[#95694f] hover:text-white"
                >
                  VIEW DETAILS
                  <span className="text-base">→</span>
                </a>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Content */}
        <div className="mt-11 text-center">

          <p className="mx-auto max-w-lg text-sm leading-6 text-[#65635f]">
            Explore our complete range of yoga classes designed to improve your
            strength, flexibility, balance, and overall wellness.
          </p>

          <a
            href="#classes"
            className="mt-7 inline-flex items-center gap-3 rounded bg-[#916b55] px-6 py-4 text-xs font-semibold text-white transition hover:bg-[#76533f]"
          >
            ALL CLASSES
            <span className="text-base">→</span>
          </a>

        </div>
      </div>
    </section>
  );
}
