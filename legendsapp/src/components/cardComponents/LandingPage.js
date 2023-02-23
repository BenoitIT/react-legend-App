import React from 'react';
import HeroBarners from '../banners/HeroBarners';
import './frontPage.css';
import CALB9984 from '../images/benimg.png';
import MainNavBar from '../MainNavBar';
const LandingPage = () => {
    return (
        <div className="LandingPage">
            <div className="header-container">
            <MainNavBar/>
            </div>
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