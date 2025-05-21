import React from 'react'
import './SplashScreen.css';
import instaLogo from '/src/assets/instagram logo.png';

const SplashScreen = () => {
    return (
        <div className="splashScreen">
            <img src={instaLogo} alt="Instagram" className="splashLogo" />
            <div className="spinner"></div>
        </div>
    );
};

export default SplashScreen;