import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJava } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiCss3, SiHtml5, SiC, SiMysql } from 'react-icons/si';



const Skills = () => {
  const skills = [
    { name: 'C', icon: <SiC color="#A8B9CC" />, bg: '#e3f2fd' },
    { name: 'Java', icon: <FaJava color="#007396" />, bg: '#e0f7fa' },
    { name: 'HTML5', icon: <SiHtml5 color="#E34F26" />, bg: '#fbe9e7' },
    { name: 'CSS3', icon: <SiCss3 color="#2965F1" />, bg: '#e3f2fd' },
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" />, bg: '#fffde7' },
    { name: 'React.js', icon: <FaReact color="#61DBFB" />, bg: '#e3f2fd' },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" />, bg: '#e8f5e9' },
   
];

  return (
    <section id="skills" style={styles.skills}>
      <div style={styles.container}>
        <h2 style={styles.heading}>My Skills</h2>
        <div style={styles.skillList}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              style={{
                ...styles.skillCard,
                backgroundColor: skill.bg,
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div style={styles.icon}>{skill.icon}</div>
              <h3 style={styles.skillName}>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  skills: {
    background: 'linear-gradient(135deg, #1c46df, #296f48)',
    color: '#333',
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
  skillList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  },
  skillCard: {
    backgroundColor: '#1f1f1f',
    borderRadius: '15px',
    padding: '30px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '160px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  icon: {
    fontSize: '60px',
    marginBottom: '15px',
  },
  skillName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
  },
};

export default Skills;
