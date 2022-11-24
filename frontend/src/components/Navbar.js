import React from 'react';
import '../style/HomeScreen.css';

const Navbar = () => {
  return (
    <div class="navbar">
      <a href="/" class="navbar__container">
        <div class="navbar__icon" />
        <div class="navbar__text-container">
          <div class="navbar__name">IssueTrack</div>
        </div>
      </a>
    </div>
  );
}

export default Navbar;
