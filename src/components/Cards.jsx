import React from 'react';
import Button from './Button.jsx';
import './Cards.css'

function Cards () {
  return (
    <div className="card-container">
      <img 
        src="https://media.sonos.com/images/znqtjj88/production/fefba3c63bdadf7c6eacb6fbb0c6e28bc3b00704-3400x2267.jpg?w=2048&q=100&fit=clip&auto=format"
        alt="picture"
        className="card-image"
      />
      <div className="description-box">
        <h2 className="card-title">Personal Listening Perfected</h2>
        <p className="card-description">Meet Sonos Ace. Obsessively crafted. Masterfully tuned. Available now.</p>
        <Button label="Shop Now" size="medium" />
      </div>
    </div>
  )
}

export default Cards 
