import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import grainImage from "@/assets/images/grain.jpg";

export const Card = ({
  className,
  children,
  ...other
}: PropsWithChildren<ComponentPropsWithoutRef<"div">>) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800/95 border border-white/15 rounded-3xl relative z-0 overflow-hidden p-6 shadow-xl",
        className
      )}
      style={{
        transform: "translate3d(0, 0, 0)",
        ...other.style,
      }}
      {...other}
    >
      {/* Background Subtle Gradient Overlay - High Performance */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
      
      {/* Children Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
