import gsap from "gsap";
import React, { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    gsap.fromTo(
      ".loader-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="size-16 rounded-full border-4 border-white/20 border-t-cyan-400 animate-spin" />
          <div className="absolute inset-0 size-16 rounded-full border-4 border-white/10 border-b-pink-500 animate-spin-slow" />
        </div>

        <p className="loader-text text-lg font-semibold tracking-wider">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
