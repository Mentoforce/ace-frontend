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
        <source src="/hero2.webm" type="video/webm" />
        <source src="/hero2.mp4" type="video/mp4" />
      </video>
      <h1 className="font-bricolage z-100 text-5xl/16 text-center uppercase text-white font-semibold top-60 left-1/2 -translate-x-1/2 [text-shadow:0_0_30px_rgba(0,0,0,1)] absolute">
        Experience Unmatched Luxurious Living
      </h1>
    </div>
  );
}
