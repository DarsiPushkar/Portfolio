import React from 'react';
import { motion } from 'framer-motion';
import bus from '../images/busapp.png'
import cc from '../images/churnpic.png'
import cs from '../images/csp.jpeg'

const projects = [
  {
    name: 'Bus Ticket Booking Web Application',
    image: bus, // Replace with the actual path to your image
    description: 'A comprehensive web application for seamless bus ticket booking, featuring real-time seat availability, buses on available dates and routes, and user-friendly booking management.',
    techStack: ['JavaScript', 'MongoDB', 'Express.js', 'React.js', 'Node.js'],
    link: 'https://github.com/DarsiPushkar/APMS-BUS_MERN-PROJECT',
  },
  {
    name: 'Customer Churn Prediction',
    image: cc, // Replace with the actual path to your image
    description: 'A hybrid data fusion (Hard and Soft Data) approach using machine learning for customer churn prediction in the banking sector.',
    techStack: ['Python', 'Scikit-Learn', 'Pandas', 'Streamlit'],
    link: 'https://github.com/DarsiPushkar/Customer-churn',
  },
  {
    name: 'Methods and Protocols of Horticulture',
    image: cs, // Replace with the actual path to your image
    description: 'A project highlighting modern methods and protocols in horticulture, comparing the disadvantages of existing methods and showcasing the advantages of modern approaches with practical insights and a demo video.',
    techStack: ['HTML', 'CSS'],
    link: 'https://github.com/DarsiPushkar/CSP-Project',
  },
];

const Projects = () => {
  return (
    <section id="projects" style={styles.projects}>
      <div style={styles.container}>
        <h2 style={styles.heading}>My Projects</h2>
        <div style={styles.projectList}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              style={styles.projectCard}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              
              <h3 style={styles.projectName}>{project.name}</h3>
              <img src={project.image} alt={project.name} style={styles.projectImage} />
              <p style={styles.projectDescription}>{project.description}</p>
              <ul style={styles.techStack}>
                {project.techStack.map((tech, idx) => (
                  <li key={idx} style={styles.techItem}>{tech}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  projects: {
    background: 'linear-gradient(135deg, #1c46df, #296f48)',
    color: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
  },
  container: {
    maxWidth: '1200px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '40px',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  projectList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  },
  projectCard: {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    padding: '30px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '280px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    color: '#333',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  },
  projectImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  projectName: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#1c46df',
  },
  projectDescription: {
    fontSize: '16px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  techStack: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '20px',
  },
  techItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    padding: '5px 15px',
    margin: '5px',
    display: 'inline-block',
    color: '#333',
    fontWeight: '500',
  },
  projectLink: {
    color: '#ffffff',
    backgroundColor: '#1c46df',
    borderRadius: '10px',
    padding: '10px 20px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
};

export default Projects;
