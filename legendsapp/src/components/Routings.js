import React ,{useState,useEffect}from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import ReadBlogPage from './ReadBlogPage';

const Routings = () => {
  //validate the routes over current state
  const user=JSON.parse(localStorage.getItem('user'));
  const statusCode=JSON.parse(localStorage.getItem('status'));
  const [username,setUsername]=useState(null);
  const [status,setStatus]=useState(null);
  const [token,setToken]=useState(null);
  //set pages effect related events
  useEffect(()=>{
    if(user){
      setUsername(user.username);
      setStatus(statusCode);
      setToken(user.data);
    }
  },[]);
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
              <Route path="/read-blog" element={<ReadBlogPage username={username}/>} />:
            
          </Routes>
      </BrowserRouter>
  );
};

export default Routings;
