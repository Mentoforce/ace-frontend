"use client";
import { useRef, useEffect, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

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
    <div className={`hero ${loaded ? "loaded" : ""}`}>
      <img
        src="/hero-poster.jpg"
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
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <h1 className="z-100 text-7xl/16 text-center uppercase text-white font-bold top-90 left-70 -translate-x-20 [text-shadow:0_0_60px_rgba(0,0,0,1)] absolute">
        {/* Experience Unmatched Luxurious Living */}
        Crafted for Those Who Arrive
      </h1>
    </div>
  );
}
