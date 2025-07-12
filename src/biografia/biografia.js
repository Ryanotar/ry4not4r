import React from 'react';
import Navbar from '../components/navbar/navbar'; 
import Footer from '../components/footer/footer'; 
import projects from './projects';
import './biografia.css';
import logo from '../assets/logo_info.png';
import { motion } from 'framer-motion';

function Work() {
  return (
    <>
      <Navbar />
      <div className="work-hero">
        <img src={logo} alt="Logo" className="logo-img" />
        <h1>Progetti</h1>
        <p className="detto">"Ciò che verrà non è mai separato da ciò che siamo, ma ne è l’eco inevitabile"</p>
      </div>

      <div className="work-grid">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <p className="description">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Work;
