import React from "react";
import "./cardStyling.css";
const Card = ({
  imageSrc,
  BlogTitle,
  BlogDescription,
  category,
  handleChoice,
  cardId
}) => {
  return (
    <div className="card" onClick={()=>handleChoice(cardId)}>
      <h5>{BlogTitle}</h5>
      <div className= "card-text">
        <h4>{category}</h4>
        <p>{BlogDescription}</p>
      </div>
      <img src={imageSrc} className="image-from-card" />
    </div>
  );
};

export default Card;
