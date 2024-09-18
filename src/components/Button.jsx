import React from 'react';
import './Button.css'; // Import the CSS file for styling

const Button = ({ label, size }) => {
  return (
    <button className={`button ${size}`}>
      {label}
    </button>
  );
};

export default Button;

