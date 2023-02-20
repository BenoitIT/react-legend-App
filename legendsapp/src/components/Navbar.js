import React,{useContext}from "react";
import { UserContext } from "./contexts/UserContext";
import { Link ,useNavigate} from "react-router-dom";
import nav from "./navbarSrc/Links";
const Navbar = () => {
  const navigate=useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate('/')
    window.location.reload();
  };
  const{username} =useContext(UserContext)
  return (
    <div className="navbar">
      <h1>Benn-Dev</h1>
      <ul>
        {nav.map((item) => {
          return (
            <Link
              key={item.id}
              to={item.path}
              style={{ textDecoration: "none" }}
            >
              <span>{item.linkname}</span>
            </Link>
          );
        })}
        {username ? 
          <Link  style={{ textDecoration: "none" }}>
            <span onClick={handleLogout}>logout</span>
          </Link>
        : 
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>login</span>
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

export default Navbar;
