import React, { useState } from 'react';
import './about.css';
import CALB9984 from '../images/CALB9984.png';
import Address from './aboutsubComponents/Address';
import Skills from './aboutsubComponents/Skills';
import Contact from './aboutsubComponents/Contact';
const About = () => {
    const [display,setDisplay]=useState(2);
    const handleClickMe=()=>{
        setDisplay(1);
    }
    const handleClickSkill=()=>{
        setDisplay(2);
    }
    const handleClickContact=()=>{
        setDisplay(3);
    }
    return (
        <div className='about-Container'>
        <div className='about-image'>
        <img src={CALB9984} className="profile-image"/>
        </div>
        <div className='about-text'>
        <div className='aboutNav'>
          <div className={display===1?'active address':'address'} onClick={handleClickMe}>About me</div>
          <div className={display===2?'active skills':'skills'} onClick={handleClickSkill}>skills</div>
          <div className={display===3?'active contacts':'contacts'} onClick={handleClickContact}>contacts</div>
        </div>
         <div className={display===2?'displays':'hideblock'}><Skills/></div>
         <div className={display===1?'displays':'hideblock'}><Address/></div>
         <div className={display===3?'displays':'hideblock'}><Contact/></div>
        </div>
        </div>
    );
};

export default About;