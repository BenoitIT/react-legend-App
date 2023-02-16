import React from 'react';
import CardListings from './cardComponents/CardListings';
import Navbar from './Navbar';
const ReadBlogPage = () => {
    return (
        <div className='page-view'>
            <Navbar/>
           <CardListings/> 
        </div>
    );
};

export default ReadBlogPage;