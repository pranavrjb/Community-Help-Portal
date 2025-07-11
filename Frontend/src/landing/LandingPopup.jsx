import React, { useEffect } from 'react';
import './LandingPopup.css';

const getRandomTimeout = () => 6000 + Math.floor(Math.random() * 2000); // 6-8 seconds

function LandingPopup({ onClose }) {
  useEffect(() => {
    const timeout = setTimeout(onClose, getRandomTimeout());
    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className="popup-overlay">
      <div className="popup-content landing-container">
        <button className="popup-close" onClick={onClose} aria-label="Close popup">×</button>
        <header className="landing-header">
          <h1>Welcome to the Community Help Portal</h1>
          <p className="landing-description">
            Connecting people who care with those in need. Join our community to offer help, seek support, and make a difference together!
          </p>
          <button className="cta-button" onClick={onClose}>Get Started</button>
        </header>
        <div className="landing-visuals">
          <div className="visual-circle circle-blue"></div>
          <div className="visual-circle circle-green"></div>
          <div className="visual-circle circle-yellow"></div>
          <div className="visual-people">
            <span role="img" aria-label="community">🤝</span>
            <span role="img" aria-label="help">💡</span>
            <span role="img" aria-label="support">🌱</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPopup; 