import React from 'react';
import { motion } from 'framer-motion';
import pic from '../images/pic.png'
 // Replace with your actual image path

const Home = () => {
  return (
    <section id="home" style={styles.home}>
      <motion.div
        style={styles.textContainer}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <h1 style={styles.name}>Darsi Pushkar</h1>
        <p style={styles.description}>
        Computer Science graduate with a solid foundation in programming, data structures, and emerging technologies. 
        Passionate about software development, with hands-on experience in web 
        development and project-based learning. Continuously enhancing my skills to build a rewarding career in software engineering.
        </p>
      </motion.div>

      <motion.div
        style={styles.imageContainer}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <img src={pic} alt="picture" style={styles.image} />
      </motion.div>
    </section>
  );
};

const styles = {
  home: {
    background: 'linear-gradient(135deg, #1c46df, #296f48)',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '50px 20px',
  },
  textContainer: {
    flex: 1,
    padding: '0 30px',
    maxWidth: '600px',
  },
  name: {
    fontSize: '64px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
  },
  description: {
    
    fontSize: '24px',
    color: '#e0e0e0',
    lineHeight: '1.5',
    margin:'0 0 200px 0',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 30px',
    margin:'0 0 150px 0',
  },
  image: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
  },
 


};

export default Home;
