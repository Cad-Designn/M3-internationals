"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";

type Review = {
  img: string;
};

const reviews: Review[] = [
  { img: "/assets/award1.jpeg" },
  { img: "/assets/award2.jpeg" },
  { img: "/assets/award3.jpeg" },
  { img: "/assets/award4.jpeg" },
  { img: "/assets/award5.jpeg" },
  { img: "/assets/award6.jpeg" },
  { img: "/assets/award7.jpeg" },
];

const ReviewsSection: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center pt-18 overflow-hidden">
      {/* First Row */}
      <Marquee pauseOnHover speed={40} gradient={false}>
        {reviews.map((item, idx) => (
          <ReviewCard key={`row1-${idx}`} img={item.img} />
        ))}
      </Marquee>

      {/* Second Row - reversed direction */}
      <Marquee pauseOnHover speed={40} gradient={false} direction="right">
        {reviews.map((item, idx) => (
          <ReviewCard key={`row2-${idx}`} img={item.img} />
        ))}
      </Marquee>
    </div>
  );
};

export default ReviewsSection;
