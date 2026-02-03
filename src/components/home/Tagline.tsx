"use client";

export default function Tagline() {
  return (
    <h1
      className="
        font-birthstone text-center text-9xl p-7 my-10
        text-[#0C2448]
        bg-[url('/q3.jpg')]
        bg-contain bg-bottom
        relative
      "
    >
      <span
        className="
          absolute inset-0
          bg-white/40
          backdrop-grayscale
        "
      />
      <span className="relative z-10">Live Above The Ordinary...</span>
    </h1>
  );
}
