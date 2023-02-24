import React from 'react';
import LandingPage from '../cardComponents/LandingPage';
import AboutPage from './AboutPage';
const PageList = () => {
    return (
        <div className='pagelist'>
          <LandingPage/>
          <AboutPage/>
        </div>
    );
};

export default PageList;