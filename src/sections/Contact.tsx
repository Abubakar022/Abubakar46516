"use client";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-11 pt-14 lg:py-24 lg:pt-20 overflow-hidden w-full max-w-full relative">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 font-bold text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&rsquo;s connect!
              </h2>
              <p className="text-sm md:text-gray-800 md:mt-1">
                Ready to bring your next project to life? Let&rsquo;s connect and discuss how I can help you achieve your goals.
              </p>
              <a 
                href="mailto:abubakardev44@gmail.com"
                className="inline-block text-sm text-gray-900/90 font-mono mt-2 font-semibold hover:underline"
              >
                abubakardev44@gmail.com
              </a>
            </div>

            <div>
              <a
                href="mailto:abubakardev44@gmail.com"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max md:border border-gray-950 hover:bg-gray-800 transition shadow-lg cursor-pointer font-semibold"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="size-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
