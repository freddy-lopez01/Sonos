import React from 'react';
import './Hero.css'; // Import the CSS file for styling
import Button from './Button.jsx';

const Hero = () => {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay muted loop>
        <source src="https://media.sonos.com/videos/znqtjj88/production/77bd4fd3b3e5e653616cdab436bd8b3067528d63-bg-720p.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-body">
        <div className="hero-text">
          <h1>Effortless Listening</h1>
          <Button label="Medium" size="medium" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

