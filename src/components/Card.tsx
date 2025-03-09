import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import grainImage from "@/assets/images/grain.jpg";

export const Card = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-6 after:pointer-events-none",
        className
      )}
    >
      {/* Background Image Div */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})`, backgroundSize: "cover" }}
      />
      
      {/* Children Content */}
      <div>{children}</div>
    </div>
  );
};
