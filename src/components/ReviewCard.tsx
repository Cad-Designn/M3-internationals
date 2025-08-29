import React from "react";

type Props = {
  img: string;
};

const ReviewCard: React.FC<Props> = ({ img }) => {
  return (
    <img
      src={img}
      alt="review"
      className="w-[300px] h-[20vh] rounded-md m-2 object-cover"
    />
  );
};

export default ReviewCard;
