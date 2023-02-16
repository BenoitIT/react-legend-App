import React from 'react';
const PageSection = ({image,BlogDescription,blogTitle}) => {
    return (
        <div className='page-body'>
          <h1>{blogTitle}</h1>
          <img src={image} className="image-view"/>  
          <p>{BlogDescription}</p>
        </div>
    );
};

export default PageSection;