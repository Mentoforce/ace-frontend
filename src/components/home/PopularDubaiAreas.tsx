// components/PopularDubaiAreas.tsx
// Next.js component with Tailwind CSS
// Place your Dubai skyline image at: /public/images/dubai-skyline.png

import Image from "next/image";

const leftAreas2 = [["Jumeirah Bay Island"], ["Dubai Marina"]];

const leftAreas1 = [
  ["Downtown Dubai", "Dubai Sports City"],
  ["Springs Dubai", "Damac Hills"],
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
        bg-white/30 backdrop-blur-lg
        border border-white/90
        rounded-full
        px-5 py-2.5
        text-[13.5px] font-normal text-[#0c2848]
        shadow-sm
        cursor-pointer
        transition-all duration-200
        hover:bg-[#FCE7A5]/95 hover:border-[#c29a1f] hover:shadow-md hover:-translate-y-0.5
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
        relative min-h-screen h-[110vh] w-full overflow-hidden
        flex flex-col items-center
        section-padding bg-[url('/skyline1.jpeg')] bg-no-repeat bg-cover
      "
      // style={{
      //   background:
      //     "linear-gradient(170deg, #b8d4e8 0%, #d4e8f0 20%, #e8d5a8 60%, #c8a870 100%)",
      // }}
    >
      {/* Sky atmospheric overlay
      <div
        className="pointer-events-none absolute inset-0 z-0"
        // style={{
        //   background:
        //     "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(180,215,235,0.8) 0%, transparent 70%), radial-gradient(ellipse 80% 50% at 50% 100%, rgba(190,150,80,0.55) 0%, transparent 60%)",
        // }}
      /> */}

      {/* Heading */}
      <h2
        className="
          relative z-10 mb-9
          font-serif text-4xl md:text-5xl
          font-bold tracking-wide text-[#0c2848] text-center font-didot
        "
      >
        Popular Dubai Areas
      </h2>

      {/* Scene */}
      <div className="relative z-10 w-full max-w-7xl font-montserrat text-[#212121]">
        {/* Top row */}
        <div className="mb-4 flex flex-wrap justify-center gap-5">
          {topAreas1.map((area) => (
            <Tag key={area} label={area} />
          ))}
        </div>
        <div className="mb-4 flex flex-wrap justify-center gap-5">
          {topAreas2.map((area) => (
            <Tag key={area} label={area} />
          ))}
        </div>

        {/* Middle: Left tags | City image | Right tags */}
        <div className="flex items-end justify-center gap-0">
          {/* LEFT */}
          <div className="">
            <div className="hidden lg:flex flex-col items-end gap-5 pb-3.5 flex-1">
              {leftAreas1.map((row, i) => (
                <div key={i} className="flex flex-wrap gap-3">
                  {row.map((area) => (
                    <Tag key={area} label={area} />
                  ))}
                </div>
              ))}
            </div>
            <div className="hidden lg:flex flex-col items-end mr-20 gap-5 pb-16 flex-1">
              {leftAreas2.map((row, i) => (
                <div key={i} className="flex flex-wrap gap-3">
                  {row.map((area) => (
                    <Tag key={area} label={area} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 w-130 shrink-0 px-2">
            {/* <Image
              src="/skyline.png"
              alt="Dubai iconic skyline featuring Burj Al Arab, Burj Khalifa, Museum of the Future and Dubai Frame"
              width={580}
              height={460}
              priority
              className="w-full object-contain drop-shadow-2xl"
            /> */}
          </div>

          {/* RIGHT */}
          <div>
            <div className="hidden lg:flex flex-col items-start gap-3.5 pb-3.5 flex-1">
              {rightAreas1.map((row, i) => (
                <div key={i} className="flex flex-wrap justify-end gap-5">
                  {row.map((area) => (
                    <Tag key={area} label={area} />
                  ))}
                </div>
              ))}
            </div>
            <div className="hidden lg:flex flex-col items-start ml-15 gap-3.5 pb-16 flex-1">
              {rightAreas2.map((row, i) => (
                <div key={i} className="flex flex-wrap justify-end gap-5">
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
