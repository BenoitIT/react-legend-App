import React from 'react';
import CardListings from './cardComponents/CardListings';
import Navbar from './Navbar';
const ReadBlogPage = ({username}) => {
    return (
        <div className='page-view'>
            <Navbar username={username}/>
           <CardListings/> 
        </div>
    );
};

export default ReadBlogPage;