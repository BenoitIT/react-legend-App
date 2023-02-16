import React, { useState } from "react";
import Card from "./Card";
import splashone from "../images/splashone.jpg";
import splashTwo from "../images/splashtwo.jpg";
import splashThree from "../images/splash.jpg";
import splashfour from "../images/splashfour.jpg";
import PageSection from "../section/PageSection";
import blogTempData from "./Data";
const CardListings = () => {
  const [displayTxt, setDscriptionText] = useState(false);
  const handleMouseOver = () => {
    setDscriptionText(true);
  };
  const handleMouseOut = () => {
    setDscriptionText(false);
  };
  return (
    <div className='page-container'>
    <div className="card-listings">
      <Card
        imageSrc={splashone}
        BlogTitle="blog title"
        BlogDescription="we back in building"
        category="sport"
        showText={handleMouseOver}
        show={displayTxt}
        hideText={handleMouseOut}
      />
      <Card
        imageSrc={splashTwo}
        BlogTitle="blog title"
        BlogDescription="we back in building"
        category="music"
        showText={handleMouseOver}
        show={displayTxt}
        hideText={handleMouseOut}
      />
      <Card
        imageSrc={splashThree}
        BlogTitle="blog title"
        BlogDescription="we back in building"
        category="art"
        showText={handleMouseOver}
        show={displayTxt}
        hideText={handleMouseOut}
      />
      <Card
        imageSrc={splashfour}
        BlogTitle="blog title"
        BlogDescription="we back in building"
        category="politics"
        showText={handleMouseOver}
        show={displayTxt}
        hideText={handleMouseOut}
      />
    </div>
    <div>
    <PageSection image={splashTwo} BlogDescription={blogTempData.description} blogTitle={blogTempData.tile}/>
    </div>
    </div>
  );
};

export default CardListings;
