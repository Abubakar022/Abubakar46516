/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { Typewriter } from "react-simple-typewriter";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import  SparkleIcon from '@/assets/icons/sparkle.svg'; 

import { HeroOrbit } from "@/components/HeroOrbit";

const roles = [
  "🚀 Full Stack Developer",
  "🔥 Flutter Developer",
  "🎓 Teaching Fellow"
];

export const HeroSection = () => {
  return (
    <div id="home" className="py-[90px] md:py-[145px] lg:py-[150px] relative z-0 overflow-hidden w-full max-w-full">
      <div className="fixed inset-0 -z-30 opacity-5 overflow-hidden h-full pointer-events-none" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
      
      {/* Background Decorative Rings & Orbits - Hardware Accelerated & Clipped */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_85%,transparent)]">
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={448} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={719} rotation={148} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>


    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <Image src={memojiImage} width={100} height={100} priority className="size-[100px]" alt="person with laptop" />
        <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
        <div className="bg-green-500 size-2.5 rounded-full relative">
  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping-tu"></div>
</div>




          <div className="text-sm font-medium"> Available for new projects</div>
        </div>
        <div className="max-w-lg mx-auto">
        <div className="text-center mt-8">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.2rem] tracking-wide">
        <span className="text-white">I'm</span>{" "}
        <span className="text-green-500">Abu Bakar</span>
      </h1>
      <h2 className="text-gray-400 text-2xl md:text-3xl mt-4">
        <Typewriter words={roles} loop={0} cursor cursorStyle="|" typeSpeed={80} deleteSpeed={50} />
      </h2>
    </div>

          <p className="mt-4 text-center text-white/60 px-2 md:text-large lg:text-[1.2rem]">
            Certified Full Stack & Mobile Developer. I build high-performance web, desktop, and mobile systems with Next.js, Go, Python, Flutter & modern cloud architectures. 🚀
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center mt-8 gap-4">
        <a 
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/5 transition cursor-pointer"
        >
          <span className="font-semibold">Explore My Work</span>
          <ArrowDown className="size-4" />
        </a>

        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:bg-white/90 transition shadow-sm cursor-pointer"
        >
          <span>👋</span>
          <span className="font-semibold">Let&rsquo;s connect!</span>
        </a>
      </div>
    </div>
  </div>
  );
};
