import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // IMPORTA Link
import '../App.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';
import { useNavigate } from 'react-router-dom';

function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.VANTA.NET) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x2196f3,          // blu primario
          backgroundColor: 0x0a0a23, // blu scuro/nero
          points: 10.0,
          maxDistance: 20.0,
          spacing: 15.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="hero" ref={vantaRef}>
      <div className="overlay">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <h1 className="lastname">Notararigo</h1>
        <h2 className="firstname">Ryan</h2>
        <p className="subtitle">"Sii il protagonista del tuo presente"</p>

        <button className="contact-btn" onClick={handleContactClick}>
          Contact Me
        </button>

        <div className="social-icons">
          <a href="http://instagram.com/ry4not4/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} color="white" />
          </a>
          <a href="https://www.linkedin.com/in/ryan-notararigo-234408253" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} color="white" />
          </a>
        </div>
 
        {/* Usa Link di react-router-dom per navigare internamente */}
        <div className="page-buttons">
          <Link to="/biografia" className="nav-btn">Progetti</Link>
          <a
            href="/curriculum.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn"
          >
            Curriculum
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
