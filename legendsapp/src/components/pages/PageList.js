import React ,{useEffect}from 'react';
import LandingPage from '../cardComponents/LandingPage';
import AboutPage from './AboutPage';
import MainNavBar from '../MainNavBar';
const PageList = ({scroll}) => {
    return (
        <div className='pagelist'>
          <div className="header-container">
            <MainNavBar scrollStatus={scroll}/>
            </div>
          <LandingPage/>
          <AboutPage/>
        </div>
    );
};

export default PageList;