  import React from 'react';
  import './SocialLinks.css';

  function SocialLinks({ links }) {
    return (
      <ul className="social-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
          </li>
        ))}
      </ul>
    );
  }

  export default SocialLinks;
