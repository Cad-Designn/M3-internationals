// components/ParallaxSection.tsx
import React, { useEffect, useState } from "react";

interface ParallaxSectionProps {
  backgroundImage: string;

  height?: string;
  speed?: number;
  zoomScale?: number;

  /** Overlay can be solid (rgba, hex) or CSS gradient */
  overlay?: string;
  blendMode?: React.CSSProperties["mixBlendMode"];

  /** Smooth fade out effect on scroll */
  opacityEffect?: boolean;

  /** Positioning options for child content */
  contentPosition?: "center" | "top" | "bottom" | "left" | "right";

  /** Responsive: disable parallax on small screens */
  disableOnMobile?: boolean;

  /** Optional filters */
  blur?: boolean;
  brightness?: number; // 1 = normal, 0.5 = darker, 1.5 = brighter

  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  backgroundImage,
  height = "h-[100vh]",
  speed = 0.4,
  zoomScale = 1,
  overlay = "rgba(0,0,0,0.3)",
  blendMode = "normal",
  opacityEffect = false,
  contentPosition = "center",
  disableOnMobile = true,
  blur = false,
  brightness = 1,
  className = "",
  contentClassName = "",
  children,
}) => {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (!disableOnMobile || !isMobile) {
      const handleScroll = () => setOffset(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, [disableOnMobile, isMobile]);

  // Transform styles (parallax + zoom)
  const transformStyle =
    disableOnMobile && isMobile
      ? {}
      : {
          transform: `translateY(${offset * speed}px) scale(${
            1 + offset * 0.0005 * zoomScale
          })`,
        };

  // Opacity fade
  const opacity = opacityEffect ? Math.max(1 - offset / 600, 0) : 1;

  // Position mapping
  const positionClasses: Record<string, string> = {
    center: "flex items-center justify-center",
    top: "flex items-start justify-center pt-20",
    bottom: "flex items-end justify-center pb-20",
    left: "flex items-center justify-start pl-12",
    right: "flex items-center justify-end pr-12",
  };

  return (
    <div className={`relative w-full ${height} overflow-hidden ${className}`}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: `${blur ? "blur(4px)" : ""} brightness(${brightness})`,
          ...transformStyle,
          opacity,
        }}
      />

      {/* Overlay (solid or gradient) */}
      {overlay && (
        <div
          className="absolute inset-0"
          style={{ background: overlay, mixBlendMode: blendMode }}
        />
      )}

      {/* Content */}
      <div
        className={`relative z-10 w-full h-full ${positionClasses[contentPosition]} ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
