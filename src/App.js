import React, { useState, useEffect } from 'react';
import backgroundImage from './assets/backgroundImage.png';
import AboutMeBackground from './assets/aboutme2.jpg';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  const [backgroundImageSrc, setBackgroundImageSrc] = useState(backgroundImage);

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById('aboutMe');
      if (aboutMeSection && window.scrollY >= aboutMeSection.offsetTop) {
        setBackgroundImageSrc(AboutMeBackground);
      } else {
        setBackgroundImageSrc(backgroundImage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App" 
      style={{ 
        backgroundImage: `url(${backgroundImageSrc})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'auto' 
      }}
    >
      <Navbar />
      <Home />
      <AboutMe id="about" />
      <Contact />
    </div>
  );
}

export default App;
