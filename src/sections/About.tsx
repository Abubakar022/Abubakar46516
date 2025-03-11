"use client";
import { SectionHeader } from "@/components/SectionHeader";
import certificate from "@/assets/images/ctf.png";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg';
import Image from "next/image"; 

// Importing SVG icons
import AndroidStudio from "@/assets/icons/androidstudio.svg";
import CPlusPlus from "@/assets/icons/cplusplus.svg";
import Dart from "@/assets/icons/dart.svg";
import Figma from "@/assets/icons/figma.svg";
import Firebase from "@/assets/icons/firebase.svg";
import Flutter from "@/assets/icons/flutter.svg";
import GitHub from "@/assets/icons/github.svg";
import GooglePlay from "@/assets/icons/googleplay.svg";
import Kotlin from "@/assets/icons/kotlin.svg";
import Linux from "@/assets/icons/linux.svg";
import MySQL from "@/assets/icons/mysql.svg";
import PHP from "@/assets/icons/php.svg";
import Postman from "@/assets/icons/postman.svg";
import Python from "@/assets/icons/python.svg";
import JetpackCompose from "@/assets/icons/jetpackcompose.svg";
import HTML5 from "@/assets/icons/html5.svg";
import CSS3 from "@/assets/icons/css3.svg";
import JavaScript from "@/assets/icons/javascript.svg";
import Chrome from "@/assets/icons/chrome.svg";
import RESTAPI from "@/assets/icons/pinboard.svg";
import Netbeans from "@/assets/icons/apachenetbeanside.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map5.jpg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolboxItems";
import {motion} from "framer-motion";
import { useRef } from "react";
 // Custom icon for REST API

 const toolbox = [
  // Programming Languages
  {
    title: "Kotlin",
    iconType: Kotlin,
  },
  {
    title: "Dart",
    iconType: Dart,
  },
  {
    title: "Python",
    iconType: Python,
  },
  {
    title: "C++",
    iconType: CPlusPlus,
  },
  {
    title: "JavaScript",
    iconType: JavaScript,
  },
  {
    title: "PHP",
    iconType: PHP,
  },
  {
    title: "HTML",
    iconType: HTML5,
  },
  {
    title: "CSS",
    iconType: CSS3,
  },

  {
    title: "Android Studio",
    iconType: AndroidStudio,
  },
  {
    title: "Flutter",
    iconType: Flutter,
  },
  {
    title: "Firebase",
    iconType: Firebase,
  },
  {
    title: "GitHub",
    iconType: GitHub,
  },
  {
    title: "Postman",
    iconType: Postman,
  },
  {
    title: "Play Console",
    iconType: GooglePlay,

  },
  {
    title: "MySQL",
    iconType: MySQL,
  },
  {
    title: "REST API",
    iconType: RESTAPI, // Custom REST API icon
  },
  {
    title: "Linux",
    iconType: Linux,
  },
  {
    title: "Chrome",
    iconType: Chrome,
  },
  {
    title: "Netbeans",
    iconType: Netbeans,
  },
  {
    title: "Figma",
    iconType: Figma,
  },
];
const Skills = [
  {
    title: "Android",
    emoji: "📱",
    left: "5%",
    top: "5%",
  },
  {
    title: "Flutter",
    emoji: "🎯",
    left: "50%",
    top: "5%",
  },
  {
    title: "Backend",
    emoji: "🔗",
    left: "10%",
    top: "45%",
  },
  {
    title: "GitHub",
    emoji: "🛠️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Teaching",
    emoji: "👨‍🏫",
    left: "60%",
    top: "50%", 
  },
  {
    title: "Coding",
    emoji: "💻",
    left: "5%",
    top: "80%",
  },
  {
    title: "APIs",
    emoji: "🌐",
    left: "45%",
    top: "90%",
  }
];

export const AboutSection = () => {
  const cf = useRef(null);
  return <div id="about" className="py-20">
    <div className="container">
    <SectionHeader title="About Me" eyebrow="A Glimpse into My World" description="Learn more about who I am, what I do, and the skills I bring to the table"/>
    <div className="mt-20 flex flex-col gap-6">
    
    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3  md:gap-6">

      <Card className="h-[320px] md:col-span-2 lg:col-span-1">
<div className="flex flex-col">
  <div className="inline-flex items-center gap-2">
  <StarIcon className="size-9 text-emerald-300"/>
  <h3 className="font-serif text-[25px]">My Credentials</h3>
  </div>
  <p className="text-sm text-white/60 mt-2">Showcasing my Expertise and Achievements.</p>

  </div>
 <div className="w-[244px] md:w-[230px]   mx-auto mt-3 md:mt-1">
 <a href="https://www.credly.com/badges/c08bf5b5-560b-4ebc-963b-8f90435db243/linked_in_profile" target="_blank" rel="noopener noreferrer">
  <Image src={certificate} alt="Certificate" />
</a>

  </div>


      </Card>
    
    
      <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
<div>
  <CardHeader title="My Toolbox" description="A collection of tools and technologies I use to build seamless, high-performance, and visually stunning applications." className=" px-6 pt-6"/>
  
</div>
<ToolBoxItems toolbox={toolbox} className="mt-6" itemsWrapperClassName="animate-move-left [animation-duration:50s]"/>
<ToolBoxItems toolbox={toolbox} className="mt-6 " itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:25s]"/>
      </Card>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-6 lg:grid-cols-3">
      <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
  <div>
    <CardHeader title="Tech Proficiency List" description="See the skills that define my development expertise." className="px-6 py-6"/>
  </div>

  <div className="relative w-full h-full flex" ref={cf}>
    {Skills.map((skill) => (
      <motion.div
        key={skill.title}
        className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
        style={{
          left: skill.left || "0%",   // ✅ Default value
          top: skill.top || "0%",     // ✅ Default value
        }}
        drag
        dragConstraints={cf}
      >
        <span>{skill.emoji}</span>
        <span className="font-medium text-gray-950">{skill.title}</span>
      </motion.div>
    ))}
  </div>
</Card>

      <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
      <Image src={mapImage} alt="mapImage" className="h-full w-full md:h-[318px] lg:h-[325px] object-cover object-left-top"/>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s] "></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 "></div>
      <Image src={smileMemoji} alt="smileEmoji" className="size-20" />
      </div>
      </Card>
      </div>
    </div>
  </div>
  </div>
};
