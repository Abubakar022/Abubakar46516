import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react";
export const ToolBoxItems = ({ toolbox, className, itemsWrapperClassName }: { toolbox: { title: string; iconType: React.ElementType; }[]; className?: string; itemsWrapperClassName?: string }) => {
    return (
        <div className={twMerge("flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div 
                className={twMerge("flex flex-none py-0.5 gap-6 pr-6 will-change-transform", itemsWrapperClassName)}
                style={{ transform: "translate3d(0, 0, 0)" }}
            >
                {[...new Array(2)].fill(0).map((_, index) => (
                   <Fragment key={index}>
                        {toolbox.map(item => (
                            <div key={item.title} className="inline-flex items-center gap-3 py-2 px-3 border border-white/15 bg-white/[0.03] rounded-xl shadow-sm">
                                <TechIcon component={item.iconType} />
                                <span className="font-semibold text-sm">{item.title}</span>
                            </div>
                        ))}
                   </Fragment>
                ))}
            </div>
        </div>
    );
};
