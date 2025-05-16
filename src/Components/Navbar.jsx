import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <div >
          <h2 style={styles.name}>Darsi Pushkar</h2>
        </div>
        <div>
        <ul style={styles.navList}>
          <li><Link to="home" smooth={true} duration={500} style={styles.link}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} style={styles.link}>About</Link></li>
          <li><Link to="resume" smooth={true} duration={500} style={styles.link}>Resume</Link></li>
          <li><Link to="skills" smooth={true} duration={500} style={styles.link}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500} style={styles.link}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} style={styles.link}>Contact</Link></li>
        </ul>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    background: 'linear-gradient(135deg, rgba(28, 70, 223, 0.77), rgba(41, 111, 72, 0.52))',
    color: 'white',
    padding: '10px 0',
    zIndex: 1000,
    height: '50px', // Increased height for better spacing
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px', // Increased left padding for tighter alignment
  },
  
  name: {
    margin: 0,
    fontSize: '28px', // Increased font size for the name
    fontWeight: 'bold',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-end', // Aligns items to the right
    margin: 0,
    padding: 0,
    gap: '80px', // Adds space between each link
  },
  link: {
    cursor: 'pointer',
    color: 'white',
    fontSize: '20px', // Increased font size for links
    transition: 'color 0.3s', // Smooth hover effect
  },
};

export default Navbar;
