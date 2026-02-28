// components/PopularDubaiAreas.tsx
// Next.js component with Tailwind CSS
// Place your Dubai skyline image at: /public/images/dubai-skyline.png

import Image from "next/image";

const leftAreas2 = [["Jumeirah Bay Island"], ["Dubai Marina"]];

const leftAreas1 = [
  ["Springs Dubai", "Damac Hills"],
  ["Downtown Dubai", "Dubai Sports City"],
];

const rightAreas1 = [
  ["Business Bay", "Bluewaters Island"],
  ["Al Barsha", "Downtown Jebel Ali"],
];

const rightAreas2 = [["Jeleb Ali Free Zone (JAFZA)"], ["Dubai Creek Harbour"]];

const topAreas1 = [
  "Palm Jumeirah",
  "Dubai Land",
  "City Walk Dubai",
  "Jumeirah Village Circle - JVC",
];

const topAreas2 = [
  "Dubai South",
  "Arabian Ranches",
  "Silicon Oasis",
  "DIFC",
  "Discover Gardens",
  "Akoya Oxygen",
  "Dubai Hills Estate",
];

function Tag({ label }: { label: string }) {
  return (
    <span
      className="
        inline-block whitespace-nowrap
        bg-white/25 backdrop-blur-lg
        border border-white/90
        rounded-full
        px-5 py-2.5
        text-[13.5px] font-normal text-[#0c2848]
        shadow-sm
        cursor-pointer
        transition-all duration-200 hover:shadow-md hover:-translate-y-0.5
        select-none
      "
    >
      {label}
    </span>
  );
}

export default function PopularDubaiAreas() {
  //px-6 py-12
  return (
    <section
      className="
        relative min-h-screen w-full overflow-hidden
        flex flex-col items-center
        section-padding bg-[url('/frame367.png')] bg-no-repeat bg-cover
      "
    >
      {/* Heading */}
      <h2
        className="
          relative z-10 mb-10 text-4xl md:text-5xl tracking-wide text-[#0c2848] text-center font-didot
        "
        style={{ fontSize: "clamp(30px, 4.2vw, 54px)" }}
      >
        Popular Dubai Areas
      </h2>

      {/* Scene */}
      <div className="relative mex-w-7xl z-10 w-full font-montserrat text-[#212121]">
        {/* Top row */}
        <div className="mb-4 flex flex-wrap justify-center gap-3 md:gap-8">
          {topAreas1.map((area) => (
            <Tag key={area} label={area} />
          ))}
        </div>
        <div className="mb-4 flex flex-wrap justify-center gap-3 md:gap-8">
          {topAreas2.map((area) => (
            <Tag key={area} label={area} />
          ))}
        </div>

        {/* Middle: Left tags | City image | Right tags */}
        <div className="flex justify-center">
          {/* LEFT */}
          <div className="">
            <div className="hidden lg:flex flex-col items-end gap-5 pb-3.5 flex-1">
              {leftAreas1.map((row, i) => (
                <div key={i} className="flex no-wrap gap-8">
                  {row.map((area) => (
                    <Tag key={area} label={area} />
                  ))}
                </div>
              ))}
            </div>
            <div className="hidden lg:flex flex-col items-center gap-6 pb-16 flex-1">
              {leftAreas2.map((row, i) => (
                <div key={i} className="flex no-wrap gap-8">
                  {row.map((area) => (
                    <Tag key={area} label={area} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className=" relative w-170 mt-5 md:pt-150 pt-50">
            <Image
              src="/infographic.svg"
              alt="Dubai iconic skyline featuring Burj Al Arab, Burj Khalifa, Museum of the Future and Dubai Frame"
              fill
              priority
              className="w-full md:object-cover object-contain overflow-visible -z-10 drop-shadow-2xl"
            />
          </div>

          {/* RIGHT */}
          <div>
            <div className="hidden lg:flex flex-col items-start gap-3.5 pb-3.5 flex-1">
              {rightAreas1.map((row, i) => (
                <div key={i} className="flex no-wrap justify-end gap-8">
                  {row.map((area) => (
                    <Tag key={area} label={area} />
                  ))}
                </div>
              ))}
            </div>
            <div className="hidden lg:flex flex-col items-start ml-15 gap-3.5 pb-16 flex-1">
              {rightAreas2.map((row, i) => (
                <div key={i} className="flex flex-wrap justify-end gap-8">
                  {row.map((area) => (
                    <Tag key={area} label={area} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: all tags below image */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 lg:hidden pb-10">
          {[...leftAreas1.flat(), ...rightAreas1.flat()].map((area) => (
            <Tag key={area} label={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
