import { useState } from "react";
import "./star-rating.scss"


export default function StarRating({ rating }) {
  const maxStars = 5;
  return (
    <div className="star-rating">
      {[...Array(maxStars)].map((star, index) => {
        index += 1;
        return (
          <span className={`star ${index <= (rating) ? "on" : "off"}`} key={index}>&#9733;</span>
        );
      })}
      {`${rating} / ${maxStars}`}
    </div>
  );
};
