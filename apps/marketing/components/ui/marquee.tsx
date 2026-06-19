import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
  items: string[];
};

export function Marquee({ items, className, ...props }: MarqueeProps) {
  const repeatedItems = [...items, ...items];

  return (
    <div
      className={cn(
        "group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
      {...props}
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {repeatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            aria-hidden={index >= items.length}
            className="mr-8 whitespace-nowrap font-mono text-[11px] uppercase tracking-normal text-white/40 transition-colors hover:text-white/80 sm:mr-10 sm:text-xs md:mr-12 md:text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
