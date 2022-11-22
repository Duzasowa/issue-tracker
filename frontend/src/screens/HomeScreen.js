import React from 'react';
import '../style/HomeScreen.css';

const HomeScreen = () => {
  return (
    <>
      <div class="home">
        {/* Navbar */}
        <div class="navbar">
          <div class="navbar__container">
            <div class="navbar__icon" />
            <div class="navbar__text-container">
              <div class="navbar__name">IssueTrack</div>
            </div>
          </div>
        </div>
        {/* Main Body */}
        <div class="home__body">
          <div class="home__container">
            <div class="home__title">
              <div class="title-1">Name</div>
              <div class="title-1 mod-1">Title</div>
              <div class="title-1">Status</div>
              <div class="title-1 mod-2">ID</div>
              <div class="title-1">Last Modified</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;