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
import mapImage from "@/assets/images/map3.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolboxItems";
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
const Skills=[
  {
    title:'Android Development',
    emoji:'📱',
  },
  {
    title:'Flutter & Dart',
    emoji:'🎯',
  },
  {
    title:'Backend Integration',
    emoji:'🔗',
  },
  {
    title:'Version Control',
    emoji:'🛠️',
  },
  {
    title:'UI/UX Design',
    emoji:'🎨',
  },
  {
    title:'Teaching Assistant',
    emoji:'👨‍🏫',
  },
  {
    title:'Problem Solving',
    emoji:'🧠',
  }
]
export const AboutSection = () => {
  return <div className="py-20">
    <div className="container">
    <SectionHeader title="About Me" eyebrow="A Glimpse into My World" description="Learn more about who I am, what I do, and the skills I bring to the table"/>
    <div className="mt-20 flex-col gap-6">
    
    
      <Card className="h-[334px]">
<div className="flex flex-col">
  <div className="inline-flex items-center gap-2">
  <StarIcon className="size-9 text-emerald-300"/>
  <h3 className="font-serif text-[25px]">My Credentials</h3>
  </div>
  <p className="text-sm text-white/60 mt-2">Showcasing my Expertise and Achievements.</p>

  </div>
 <div className="w-45 mx-auto mt-4">
  <Image src={certificate} alt="Certificate" />
  </div>


      </Card>
    
    
      <Card className="h-[334px] p-0">
<div>
  <CardHeader title="My Toolbox" description="A collection of powerful tools and technologies I use to build seamless, high-performing, and visually stunning applications across different platforms." className=" px-6 pt-6"/>
  
</div>
<ToolBoxItems toolbox={toolbox} className="mt-6"/>
<ToolBoxItems toolbox={toolbox} className="mt-6" itemsWrapperClassName="-translate-x-1/2"/>
      </Card>
      <Card>
<div>
  <CardHeader title="Tech Proficiency List" description="See the skills that define my development expertise."/>

</div>
<div>
  {Skills.map((skill)=>(
    <div key={skill.title}>
      <span>{skill.title}</span>
      <span>{skill.emoji}</span>
    </div>
  ))}
</div>
      </Card>
      <Card>
      <Image src={mapImage} alt="mapImage" />
      <Image src={smileMemoji} alt="smileEmoji" />
      </Card>
    </div>
  </div>
  </div>
};
