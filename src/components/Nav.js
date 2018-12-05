import React from 'react';
import { Link } from "react-router-dom";

const Nav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark" style={{background: props.headerColor, color: props.headerTextColor, boxShadow: "0px 2px 4px lightgrey", transition: "background 1s ease"}}>
    <a className="navbar-brand" href="/">TechBuy</a>
    <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={props.updateHeaderColor}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/featured" onClick={props.updateHeaderColor}>Featured</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search" onClick={props.updateHeaderColor}>Search</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav;