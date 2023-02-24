import React from 'react';
import SubmitButton from '../../formComponents/SubmitButton';
import {GiBurningPassion} from 'react-icons/gi';
import {MdEmail} from 'react-icons/md';
import {FaRegAddressCard} from 'react-icons/fa';
import {GiAges} from 'react-icons/gi';
import {BsTelephoneForwardFill} from 'react-icons/bs';
import {SiReverbnation} from 'react-icons/si';
const Address = () => {
    return (
        <div className='addess-dscript'>
            <p className='intro'>I characterize functional programming as a radical and elegant 
                attack on the whole enterprise of writing programs</p>
            <div className='text-contents'>
            <div className='titles'>
                <b><GiBurningPassion/>  Passion:</b><br/><br/><p>software development</p>
                <b><MdEmail/>  Email:</b><br/><br/><p>benoitnda35@gmail.com</p>
                <b><FaRegAddressCard/>  Address</b><br/><br/><p>Rwanda-Kigali</p>
            </div>
            <div className='complements'>
               <b><GiAges/>  Age:</b><br/><br/><p>+22</p>
                <b><BsTelephoneForwardFill/>  Phone:</b><br/><br/><p>250784817203</p>
                <b><SiReverbnation/>  Nationality</b><br/><br/><p>Rwandan</p>
            </div>
            </div>
            <div className='leftBtn'><SubmitButton value="DownLoad CV" className='frontpage-button'/></div>
        </div>
    );
};

export default Address;