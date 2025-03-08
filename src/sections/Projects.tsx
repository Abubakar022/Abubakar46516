import Image from "next/image"; // Import Next.js Image component
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUprightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
const portfolioProjects = [
  {
    company: "Tiraz Make",
    year: "2024",
    title: "StudyBuddy App",
    results: [
      { title: "Integrated task management and study tracking" },
      { title: "Implemented Material 3 for a modern UI" },
      { title: "Boosted user productivity with smart notifications" },
    ],
    link: "https://www.linkedin.com/posts/abu-bakar-384aa1264_grateful-for-the-ui-inspiration-i-learned-activity-7226826198973087747-nFpf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDx6tQBEev8tj3lPNMf0M79G9shv1EW5no",
    image: lightSaasLandingPage,
  },
  {
    company: "Tiraz Make",
    year: "2024",
    title: "Saving Note App",
    results: [
      { title: "Simplified expense tracking for users" },
      { title: "Optimized for smooth performance" },
      { title: "Enhanced security with local storage" },
    ],
    link: "https://www.linkedin.com/posts/abu-bakar-384aa1264_savingnotes-notemanagement-efficiency-activity-7196926541157568512-eZTh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDx6tQBEev8tj3lPNMf0M79G9shv1EW5no",
    image: darkSaasLandingPage,
  },
 
  {
    company: "Tiraz Make",
    year: "2024",
    title: "BMI Calculator App",
    results: [
      { title: "Improved accuracy with multiple unit options" },
      { title: "Enhanced UI with Google Fonts and custom themes" },
      { title: "Enabled easy sharing of BMI results" },
    ],
    link: "https://www.linkedin.com/posts/abu-bakar-384aa1264_jetpackcompose-androiddev-bmi-activity-7226121848206368768-ZX0I?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDx6tQBEev8tj3lPNMf0M79G9shv1EW5no",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-40">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex justify-center ">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center md:mt-14 md:font-bold md:text-[17px]">Real-world Results</p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">See how I transformed complex concepts into seamless and efficient Android applications</p>
        <div className="flex flex-col md:mt-20 mt-10 gap-20">
          {portfolioProjects.map((project, index) => (
            <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 after:z-10  overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 md:px-10 md:pt-12 px-8 pt-8 lg:pt-16 lg:px-20 after:pointer-events-none">
              <div className="absolute inset-0 -z-10 opacity-5 "style={{backgroundImage:`url(${grainImage.src})`}}> </div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
             
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 bg inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span> {project.year}</span>
                </div>
              
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result, idx) => (
                  <li className="flex gap-2 text-sm md:text-base text-white/50" >
                    <CheckCircleIcon className = "size-5 md:size-6"/>
                    <span>{result.title} </span>
                    </li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>Visit Project</span>
                  <ArrowUprightIcon className = "size-4"/></button>
              </a>
              
              </div>
              <div className="relative">
              {/* Use Next.js Image component */}
              <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 mx-auto lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
