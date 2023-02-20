import React, { useState,useEffect } from "react";
import Comment from "../cardComponents/Comment";
import Input from "../formComponents/Input";
import SubmitButton from "../formComponents/SubmitButton";
import '../authForms.css';
const PageSection = ({ image, BlogDescription, blogTitle, username, id,token}) => {
  const [comment, setComment] = useState("");
  const [submit, setSubmit] = useState(null);
  const [commentList, setCommentList] = useState([]);
  //state comment value copturing
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  //refeshing the page after comment
  const refresh = () => window.location.reload(true);
  //handling comment event
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    fetch(`https://dead-jade-coypu-cape.cyclic.app/Api/blog/${id}/addcomment/`,
      {
      method:'POST',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
       comment
      })
    })
      .then((response) => response.json()).then(data =>{
        alert(data.message);
        setSubmit(false);
        setComment("")
      })
      .catch((error) => {
        setSubmit(false);
        alert(error.message);
        refresh();
      });
  };
  //fetching comments
  
useEffect(()=>{
  if(id){
  fetch(`https://dead-jade-coypu-cape.cyclic.app/Api/blogs/blog/${id}`,{ mode: 'cors' }).then(res=>res.json()
  ).then( articles => {
    setCommentList(articles.data.comments)
  })
  }
},[])

  //page displaying
  return (
    <div className="page-body">
      <h1>{blogTitle}</h1>
      <img src={image} className="image-view" />
      <p>{BlogDescription}</p>
      <div>
      <div className={submit?"loading":"loader"}>Loading...</div>
        <Input
          placeholder="type a comment here"
          handleInput={handleCommentChange}
          value={comment}
        />
        <SubmitButton value="comment" handleSubmit={handleSubmit} />
      </div>
      <b>comments..</b>
      {commentList.map(comm=>{
      return <Comment key={comm._id} usernam={username} comment={comm.comment}/>
      })}
    </div>
  );
};

export default PageSection;
