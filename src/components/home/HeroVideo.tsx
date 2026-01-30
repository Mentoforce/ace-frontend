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
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        {/* <source src="/hero.webm" type="video/webm" /> */}
        <source src="/hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
