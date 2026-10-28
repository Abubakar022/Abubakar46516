import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({ children, size ,rotation,orbitDuration,shouldOrbit=false,shouldSpin=false,spinDuration}: PropsWithChildren<{ size: number; rotation:number;
  orbitDuration?:string;
  shouldOrbit?:boolean
  shouldSpin?:boolean;
  spinDuration?:string
 }>) => {    
  return (
    <div 
      className="absolute left-1/2 top-1/2 pointer-events-none -z-20"
      style={{
        transform: "translate3d(-50%, -50%, 0)",
        willChange: "transform",
      }}
    >
      <div 
        className={twMerge(shouldOrbit === true && "animate-spin")} 
        style={{
          animationDuration: orbitDuration,
          willChange: shouldOrbit ? "transform" : undefined,
        }}
      >
        <div 
          className="flex items-start justify-start" 
          style={{ 
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`, 
            width: `${size}px`,
          }}
        >
          <div 
            className={twMerge(shouldSpin === true && "animate-spin")} 
            style={{
              animationDuration: spinDuration,
              willChange: shouldSpin ? "transform" : undefined,
            }}
          >
            <div 
              className="inline-flex" 
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
