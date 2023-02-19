import React from 'react';

const Comment = ({usernam,comment}) => {
    return (
        <div className="comment-card">
        <h6>{usernam}</h6>
          <p>{comment}</p>
        <small>thursday, feb 2020</small>
      </div>
    );
};
export default Comment;