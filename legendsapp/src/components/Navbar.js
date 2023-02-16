import React from "react";
import { Link } from "react-router-dom";
import nav from "./navbarSrc/Links";
const Navbar = () => {
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
      </ul>
      <h4>guest</h4>
    </div>
  );
};

export default Navbar;
