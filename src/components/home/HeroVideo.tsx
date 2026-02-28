"use client";
import { useTranslations } from "@/lib/i18n/client";
import { useRef, useEffect, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onReady = () => setLoaded(true);

    video.addEventListener("canplaythrough", onReady);

    return () => {
      video.removeEventListener("canplaythrough", onReady);
    };
  }, []);

  return (
    <section className="h-screen">
      <div className={`hero ${loaded ? "loaded" : ""}`}>
        <img
          src="/website image.jpg"
          alt="Luxury real estate background"
          className="hero-fallback"
        />

        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/website 002.mp4" type="video/mp4" />
        </video>

        <h1 className="font-merriweather z-20 md:text-6xl/16 text-5xl text-center font-bold  text-white tracking-wider top-80 left-1/2 -translate-x-1/2 [text-shadow:0_0_30px_rgba(0,0,0,1)] absolute">
          Discover the Finest{" "}
          <span className="md:text-[65px]/20">Properties</span>
        </h1>
        <button className="absolute top-125 z-20 left-1/2 -translate-x-1/2 bg-linear-to-r from-[#FCE7A5] to-[#C28A2A] text-[#0c2448] font-bold px-4 py-2.5 rounded-2xl font-didot md:hidden text-lg">
          {t("nav.cta")}
        </button>
        {/* <div className="absolute inset-0 bg-black/25" /> */}
      </div>
    </section>
  );
}
