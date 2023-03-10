import React ,{useState,useEffect}from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import ReadBlogPage from './ReadBlogPage';
import LandingPage from './cardComponents/LandingPage';
import AboutPage from './banners/About';
import PageList from './pages/PageList';
import { UserContext } from './contexts/UserContext';

const Routings = ({scrollsensor}) => {
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
      <BrowserRouter basename="/react-legend-App">
           <UserContext.Provider value={{username,token}}>
            <Routes>
            <Route path="/" element={<PageList scroll={scrollsensor}/>} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/#about" element={<AboutPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            {username&&token&&status!==400?<Route path="/read-blog" element={<ReadBlogPage/>} />:
            <Route path="/read-blog" element={<LoginPage/>} />} 
            </Routes>
            </UserContext.Provider>
      </BrowserRouter>
  );
};

export default Routings;
