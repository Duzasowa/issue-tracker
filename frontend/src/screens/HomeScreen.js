import React from 'react';
import IssuesSection from '../components/IssuesSection';
import Navbar from '../components/Navbar';
import '../style/HomeScreen.css';

const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div class="home">
        {/* Navbar */}
        <Navbar />
        {/* Main Body */}
        <div class="home__body">
          <div class="home__container">
            <div class="home__title">
              <div class="title-1">Name</div>
              <div class="title-1 mod-1">Title</div>
              <div class="title-1">Status</div>
              <div class="title-1">ID</div>
              <div class="title-1">Last Modified</div>
            </div>
            <IssuesSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
