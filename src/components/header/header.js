import React from 'react';
import './header.css';
import mtLogo from '../../images/mob_logo.png';
import mtBanner from '../../images/mob_banner.png';


export default function Header() {
  return (
    <div className="headerContainer">
      <div>
          <img src={mtLogo} className="headerLogo" alt="logo" />
      </div>
      <div className="banner">
          <img src={mtBanner} className="bannerImage" alt="logo" />
      </div>
    </div>
  );
}