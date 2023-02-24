import React ,{useEffect}from 'react';
import HeroBarners from '../banners/HeroBarners';
import './frontPage.css';
import CALB9984 from '../images/benimg.png';
const LandingPage = () => {
    return (
        <div className="LandingPage" id='home'>
         <div className='profile-container'>
           <HeroBarners/> 
           <div className="img-container">
           <img src={CALB9984} className="profile-image"/>
           </div>
         </div>
        </div>
    );
};

export default LandingPage;