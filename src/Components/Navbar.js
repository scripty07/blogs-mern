import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand mx-4" to="/">
          Blogs
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/create" className="nav-link text-info mx-5">
              Create Blog
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
