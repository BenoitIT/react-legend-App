import React, { useState,useEffect,useContext } from "react";
import Comment from "../cardComponents/Comment";
import Input from "../formComponents/Input";
import SubmitButton from "../formComponents/SubmitButton";
import '../authForms.css';
import { UserContext } from "../contexts/UserContext";
const PageSection = ({ image, BlogDescription, blogTitle,id,}) => {
  const [comment, setComment] = useState("");
  const [submit, setSubmit] = useState(null);
  const [commentList, setCommentList] = useState([]);
  const [moreComment,setMoreComment] = useState(false);
  const [viewCommentTxt, setViewCommentTxt] = useState('');
  //state comment value copturing
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleMoreComment=()=>{
    setMoreComment(prevState=>!prevState);
  }
  const {username,token} = useContext(UserContext);
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
      //setMoreComment(false)
      fetch(`https://dead-jade-coypu-cape.cyclic.app/Api/blogs/blog/${id}`,{ mode: 'cors' }).then(res=>res.json()
      ).then( articles => {
        const comments=articles.data.comments;
        const sampleComments=comments.slice(-1)
        moreComment?setCommentList(comments):setCommentList(sampleComments);
        moreComment?setViewCommentTxt("minimize comment liste"):setViewCommentTxt("view more comment...");
  })
  }
},[commentList])

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
      <small onClick={handleMoreComment}>{viewCommentTxt}</small>
    </div>
  );
};

export default PageSection;
