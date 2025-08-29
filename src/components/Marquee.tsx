import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}>;

const Marquee: React.FC<Props> = ({
  children,
  reverse,
  pauseOnHover,
  className,
}) => {
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex whitespace-nowrap animate-marquee ${
          reverse ? "animate-marquee-reverse" : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""} ${
          className ?? ""
        }`}
      >
        {/* duplicate children for seamless loop */}
        <div className="flex gap-4">{children}</div>
        <div className="flex gap-4">{children}</div>
      </div>
    </div>
  );
};

export default Marquee;
