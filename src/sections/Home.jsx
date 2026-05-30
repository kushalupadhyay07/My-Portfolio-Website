import { section } from "framer-motion/client";
import React from "react";
import ParticleBackground from "../components/ParticleBackground";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticleBackground></ParticleBackground>
      <div
        className="
    absolute -top-32 -left-32
    w-[70vw] sm:w-[500vw] md:w-[30vw]
    h-[70vw] sm:h-[50vw] md:h-[30vw]
    max-w-[500px] max-h-[500px]
    rounded-full
    bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
    opacity-30 sm:opacity-20 md:opacity-10
    blur-[100px] sm:blur-[130px] md:blur-[150px]
    animate-pulse
  "
      ></div>
      <div
        className="absolute bottom-0 right-10
    w-[50vw] sm:w-[500vw] md:w-[30vw]
    h-[70vw] sm:h-[50vw] md:h-[30vw]
    max-w-[500px] max-h-[500px]
    rounded-full
    bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
    opacity-30 sm:opacity-20 md:opacity-10
    blur-[100px] sm:blur-[130px] md:blur-[150px]
    animate-pulse
  "
      ></div>
    </section>
  );
}
