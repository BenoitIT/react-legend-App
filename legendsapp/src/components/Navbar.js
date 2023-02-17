import React from "react";
import { Link } from "react-router-dom";
import nav from "./navbarSrc/Links";
const Navbar = ({ username }) => {
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
          <Link to="/logout" style={{ textDecoration: "none" }}>
            <span>logout</span>
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
