import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import {Card} from "@/components/Card";
import Image from "next/image"; // Import Next.js Image component
import { Fragment } from "react";
const testimonials = [
  {
    name: "Ahmed Raza",
    position: "Founder @ StudySphere",
    text: "Our educational app was completely transformed with a modern UI. The seamless experience, smooth performance, and refined user interface made learning more engaging and effective for students.",
    avatar: memojiAvatar1,
  },
  {
    name: "Sarah Khan",
    position: "CTO @ DevLaunch",
    text: "AbuBakar built a high-performing, scalable mobile app for our startup. His expertise in Android and Flutter made the development process seamless, efficient, and truly exceptional in every way!",
    avatar: memojiAvatar2,
  },
  {
    name: "Zain Malik",
    position: "CEO @ AppInnovators",
    text: "A well-crafted mobile app requires both design and development expertise. The apps delivered are smooth, visually stunning, well-structured, and optimized for the best possible user experience.",
    avatar: memojiAvatar3,
  },
  {
    name: "Ayesha Rehman",
    position: "Product Manager @ SoftTech Solutions",
    text: "The mobile app exceeded expectations with its polished design and user-friendly experience. It perfectly balances aesthetics, functionality, and smooth navigation, enhancing usability and engagement for all users.",
    avatar: memojiAvatar4,
  },
  {
    name: "Bilal Ahmed",
    position: "Tech Lead @ NextGen Apps",
    text: "High-quality apps require a strong focus on clean code, intuitive UI, and great UX. The results were flawless, exceeding industry standards with speed, efficiency, and performance.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return <div className="py-16 lg:py-24">
    <div className="container">
    <SectionHeader title="Happy Clients" eyebrow="What Clients Say about Me" description="Don't just take my word for it. Hear from those I've worked with!"/>
   
    <div className="mt-12 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
      <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
        {[...new Array(2)].fill(0).map((_, index) => (
         <Fragment key={index}>
  {testimonials.map((testimonial) => (
        <Card key={testimonial.name} className="max-w-xs p-4 md:p-8 md:max-w-md hover:-rotate-3 trasition duration-300">
<div className="flex gap-4 items-center">
  <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
<Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
</div>
<div>
<div className="font-semibold">{testimonial.name}</div>
<div className="text-smt text-white/40">{testimonial.position}</div>
</div>
</div>
<p className="text-sm mt-4 md:text-base md:mt-6">{testimonial.text}</p>
        </Card>
      ))}
         </Fragment>
        ))}
    
      </div>
    </div>
    </div>
  </div>;
};
