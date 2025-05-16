import React from 'react'
import { hover, motion } from 'framer-motion';


const About = () => {
  return (
    <motion.section
      id="about"
      style={styles.about}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.text}>
          I am a passionate Computer Science Graduate with a keen interest in software development. I enjoy building interactive web applications and constantly learning new technologies to enhance my skills.
        </p>
        <p style={styles.text}>
          My goal is to create innovative solutions that have a meaningful impact on people's lives. I am always excited to take on new challenges and grow as a developer.
        </p>
      </div>
    </motion.section>
  )
}


const styles = {
  about: {
    background: 'linear-gradient(135deg, #1c46df, #296f48)',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
  },
 
  container: {
    maxWidth: '800px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
};



export default About