import React from 'react';
import {GiLinkedRings} from 'react-icons/gi';
import {MdEmail} from 'react-icons/md';
import {FaInstagram} from 'react-icons/fa';
import {BsTelephoneForwardFill} from 'react-icons/bs';
const Contact = () => {
    return (
            <div className='addess-dscript'>
            <p className='intro'>I characterize functional programming as a radical and elegant 
                attack on the whole enterprise of writing programs</p>
            <div className='text-contents'>
            <div className='titles'>
                <b><BsTelephoneForwardFill/>  Phone:</b><br/><br/><p>+250784817203</p>
                <b><MdEmail/>  Email:</b><br/><br/><p>benoitnda35@gmail.com</p>
                <b><FaInstagram/>  Instagram</b><br/><br/><p>benn_dev</p>
            </div>
            <div className='complements'>
               <b><GiLinkedRings/>  Linkedin:</b><br/><br/><p>benoit_Ndagijimana</p>
            </div>
            </div>
        </div>
    );
};

export default Contact;