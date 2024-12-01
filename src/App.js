import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure App.css contains the appropriate styling
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import  Designer  from "./images/Designer.jpg";    
import  uiDesignImage  from "./images/uiDesignImage.jpg";
import uxDesignImage from "./images/uxDesignImage.jpg";
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [animateProjectsSection, setAnimateProjectsSection] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    if (position >= 500) {
      setAnimateProjectsSection(true);
    } else {
      setAnimateProjectsSection(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <h1>Alok's Portfolio</h1>
        <p>Frontend Developer | UI/UX Enthusiast</p>
        <nav>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <FaArrowDown className="scroll-down-icon" />
      </header>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I am a passionate frontend developer skilled in creating intuitive user interfaces. I love bringing creative ideas to life with HTML, CSS, JavaScript, and React.
        </p>
        <img src={Designer} alt="Designer" className="image" />
      </section>

      {/* Projects Section */}
      <section id="projects" className={`projects-section ${animateProjectsSection ? 'fade-in' : ''}`}>
        <h2>My Projects</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
          <img src={Designer} alt="Wander Travel App Mockup" className="project-image" />
            <h3>Wander - Travel Companion App</h3>
            <p>
              Wander is a travel app designed to enhance trip planning with personalized suggestions, seamless booking, and offline access.
            </p>
          </div>
          {/* Project 2 */}
          <div className="project-card">
            <img src={uiDesignImage} alt="uiDesignImage" className="project-image" />
            <h3>Travelling Apps</h3>
            <p>
            Wander is a modern travel companion app designed to enhance the travel experience with personalized recommendations, seamless booking options, and offline access. As the UI/UX designer, I focused on creating an intuitive, user-centric interface that simplifies trip planning and exploration. Key features include an interactive map, tailored travel suggestions, and real-time itineraries. The design process involved user research, wireframing, prototyping, and iterative testing to ensure a smooth, engaging experience for all types of travelers..
            </p>
          </div>
          {/* Project 3 */}
          <div className="project-card">
            <img src={uxDesignImage} alt="uxDesignImage" className="project-image" />
            <h3>3D Caroseul Animation</h3>
            <p>
            This 3D Carousel Animation showcases an interactive, rotating display of images, providing a dynamic and visually appealing way to present content. Designed with a focus on user engagement, the carousel allows users to browse through featured images seamlessly. My role as a UI/UX designer involved creating an intuitive navigation system and ensuring smooth transitions between images. This project demonstrates the power of 3D animations in enhancing user experience and interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via email or connect with me on social media:</p>
        <div className="social-icons">
          <a href="https://github.com/ak463b" target="Github" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/alokkitchloo67/" target="Linkedin" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;