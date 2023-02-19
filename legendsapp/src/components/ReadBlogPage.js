import React from 'react';
import CardListings from './cardComponents/CardListings';
import Navbar from './Navbar';
const ReadBlogPage = ({username,token}) => {
    return (
        <div className='page-view'>
            <Navbar username={username}/>
           <CardListings username={username} token={token}/> 
        </div>
    );
};

export default ReadBlogPage;