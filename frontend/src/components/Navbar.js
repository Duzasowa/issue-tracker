import React from 'react';
import { Link } from "react-router-dom";
import '../style/HomeScreen.css';

const Navbar = () => {
  return (
    <div class="navbar">
      <a href="/" class="navbar__container">
        <div class="navbar__icon" />
        <div class="navbar__text-container">
          <div class="navbar__name">IssueTrack</div>
        </div>
        <Link class="new__issue-button" to={`/addproduct`}>New issue</Link>
      </a>
    </div>
  );
}

export default Navbar;
