import React from 'react';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


const Contact = () => {
  return (
    <section id="contact" style={styles.contact}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact</h2>
        <div style={styles.contactInfo}>
          <p style={styles.infoText}><FaPhoneAlt size={20} style={styles.icon} />+91 6305088252</p>
          <p style={styles.infoText}><FaEnvelope size={20} style={styles.icon} /> pushkardarsi965@gmail.com</p>
        </div>
        <div style={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/darsi-pushkar-05315a2b8" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/DarsiPushkar" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaGithub size={30} />
          </a>
          <a href="https://x.com/DarsiPushkar" target="_blank" rel="noopener noreferrer" style={styles.icon}>
    <FaTwitter size={30} />
</a>

        </div>
      </div>
    </section>
  );
};

const styles = {
  contact: {
    background: 'linear-gradient(135deg, #1c46df, #296f48)',
    color: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
  },
  container: {
    maxWidth: '600px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  contactInfo: {
    marginBottom: '30px',
  },
  infoText: {
    fontSize: '18px',
    margin: '10px 0',
  },
  icon: {
    marginRight: '10px',
    color: '#ffffff',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
};

export default Contact;
