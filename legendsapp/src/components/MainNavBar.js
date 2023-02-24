import React,{useContext,useEffect,useState}from "react";
import { UserContext } from "./contexts/UserContext";
import { Link ,useNavigate} from "react-router-dom";
import {mainNav}from "./navbarSrc/Links";
const MainNavBar = ({scrollStatus}) => {
 //navigation hook
  const navigate=useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate('/')
    window.location.reload();
  };
  const{username} =useContext(UserContext)
  return (
    <div className={scrollStatus>0? "navbarscrolled":"navbar"}>
      <h1 className="logo">Benn-Dev</h1>
      <ul>
        {mainNav.map((item) => {
          return (
            <Link
              key={item.id}
              to={item.path}
              style={{ textDecoration: "none" }}
            >
              <span className="homeLinks">{item.linkname}</span>
            </Link>
          );
        })}
        {username ? 
          <Link  style={{ textDecoration: "none" }}>
            <span onClick={handleLogout}>logout</span>
          </Link>
        : 
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span className="homeLinks">login</span>
          </Link>
        }
      </ul>
      <h4>
        <span>welcome</span>
        {username}
      </h4>
    </div>
  );
};

export default MainNavBar;