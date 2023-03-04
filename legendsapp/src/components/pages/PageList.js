import React from 'react';
import LandingPage from '../cardComponents/LandingPage';
import AboutPage from './AboutPage';
import MainNavBar from '../MainNavBar';
import ToolsPage from './ToolsPage';
const PageList = ({scroll}) => {
    return (
        <div className='pagelist'>
          <div className={scroll>0?"header-container scrolled-header-container":"header-container"}>
            <MainNavBar scrollStatus={scroll}/>
            </div>
          <LandingPage/>
          <AboutPage/>
          <ToolsPage/>
        </div>
    );
};

export default PageList;