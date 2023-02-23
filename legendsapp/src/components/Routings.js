import React ,{useState,useEffect}from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import ReadBlogPage from './ReadBlogPage';
import LandingPage from './cardComponents/LandingPage';
import { UserContext } from './contexts/UserContext';

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
           <UserContext.Provider value={{username,token}}>
            <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage/>} />
            {username&&token&&status!==400?<Route path="/read-blog" element={<ReadBlogPage/>} />:
            <Route path="/read-blog" element={<LoginPage/>} />} 
            </Routes>
            </UserContext.Provider>
      </BrowserRouter>
  );
};

export default Routings;
