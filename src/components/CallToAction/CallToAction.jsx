import React from 'react';
import './CallToAction.css';

function CallToAction({ heading, description, buttonText }) {
  return (
    <div className="call-to-action">
      <h2>{heading}</h2>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default CallToAction;
