import React ,{useEffect}from 'react';
import HeroBarners from '../banners/HeroBarners';
import './frontPage.css';
import CALB9984 from '../images/benimg.png';
import MainNavBar from '../MainNavBar';
const LandingPage = () => {
    // const [scrollPosition, setScrollPosition] = useState(0);
//const backgroundColor = scrollPosition > 0 ? 'blue' : 'transparent';
 const handleScroll = ()=>{
  console.log(window.scrollY);
 }  
 //defining styles on scroll event
 useEffect(()=>{
  window.addEventListener('scroll', handleScroll);
 },[])
    return (
        <div className="LandingPage" id='home'>
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