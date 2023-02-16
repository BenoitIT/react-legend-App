import React from "react";
import "./cardStyling.css";
const Card = ({
  imageSrc,
  BlogTitle,
  BlogDescription,
  category,
  showText,
  show,
  hideText,
}) => {
  return (
    <div className="card" onMouseOver={showText} onMouseOut={hideText}>
      <h5>{BlogTitle}</h5>
      <div className={show ? "card-text" : "hide-text"}>
        <h4>{category}</h4>
        <p>{BlogDescription}</p>
      </div>
      <img src={imageSrc} className="image-from-card" />
    </div>
  );
};

export default Card;
