import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import  SparkleIcon from '@/assets/icons/sparkle.svg'; 

import { HeroOrbit } from "@/components/HeroOrbit";
export const HeroSection = () => {
  return <div className="py-[90px] md:py-[145px] lg:py-[150px] relative z-0">
    <div className="fixed inset-0 -z-30 opacity-5 overflow-hidden h-full" style={{ backgroundImage: `url(${grainImage.src})` }}> </div>
   <div className=" size-[620px] hero-ring"></div>
   <div  className="size-[820px] hero-ring"
  style={{
    maskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%)",
    WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%)",
  }}></div>
   <div  className="size-[1020px] hero-ring"
  style={{
    maskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%)",
    WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%)",
  }}></div>
   <div  className="size-[1220px] hero-ring"
  style={{
    maskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%)",
    WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%)",
  }}></div>
<HeroOrbit size={800} rotation={-72}>
<StarIcon className = " size-28 text-emerald-300"/>
</HeroOrbit>
<HeroOrbit size={550} rotation={20}>
<StarIcon className = " size-12 text-emerald-300"/>
</HeroOrbit>
<HeroOrbit size={590} rotation={98}>
<StarIcon className = " size-8 text-emerald-300"/>
</HeroOrbit>
<HeroOrbit size={430} rotation={-14}>
<SparkleIcon className = " size-8 text-emerald-300/20"/>
</HeroOrbit>
<HeroOrbit size={448} rotation={79}>
<SparkleIcon className = " size-5 text-emerald-300/20"/>
</HeroOrbit>
<HeroOrbit size={530} rotation={178}>
<SparkleIcon className = " size-10 text-emerald-300/20"/>
</HeroOrbit>
<HeroOrbit size={719} rotation={148}>
<SparkleIcon className = " size-14 text-emerald-300/20"/>
</HeroOrbit>
<HeroOrbit size={720} rotation={85}>
<div className = " size-3 rounded-full bg-emerald-300/20"/>
</HeroOrbit>
<HeroOrbit size={520} rotation={-41}>
<div className = " size-2 rounded-full bg-emerald-300/20"/>
</HeroOrbit>
<HeroOrbit size={650} rotation={-5}>
<div className = " size-2 rounded-full bg-emerald-300/20"/>
</HeroOrbit>
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <img src={memojiImage.src} className="size-[100px]" alt="person with laptop" />
        <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500  size-2.5 rounded-full"></div>
          <div className="text-sm font-medium"> Available for new projects</div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.2rem] text-center mt-8 tracking-wide">
            I,m Abu Bakar Android Developer

          </h1>

          <p className="mt-4 text-center text-white/60 px-2 md:text-large lg:text-[1.2rem]">
            Certified Android (Meta) & Flutter Developer. I build high-performance cross-platform apps with Flutter, Dart, Kotlin & Jetpack Compose. 🚀
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">
            Explore My Work
          </span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border-white  bg-white text-gray-900 px-6 h-12 rounded-xl">
          <span>👋</span>
          <span className="font-semibold">
            Let,s Connect
          </span>

        </button>
      </div>
    </div>

  </div>;
};
