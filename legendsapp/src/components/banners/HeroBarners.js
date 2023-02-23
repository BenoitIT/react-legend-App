import React from 'react';
import Input from '../formComponents/Input';
import SubmitButton from '../formComponents/SubmitButton';
const HeroBarners = () => {
    return (
        <div className='hero-barner'>
           <p className='intro'><span className='salitation'>
            Hey there!<br/>
            </span> My names is <span className='my-names'>Benoit <b></b>NDAGIJIMANA</span>,<br/>
            I am a <b className='work'>full stack software developer</b></p> <p className='description-paragrph'>
            with a passion for designing and developing web applications,
            a have backend development experience which allows me to understand logics needed for problem solving as well 
            front-end development skills to implement solution in virtual reality applications
            </p>
            <div className='simple-form'>
            <Input placeholder="enter your email" className="fronpage-text-input"/>
            <SubmitButton value="subscribe" className='frontpage-button'/>
            </div>
        </div>
    );
};

export default HeroBarners;