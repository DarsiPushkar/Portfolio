import React, {useState} from 'react';
import { FaDownload } from 'react-icons/fa';


const Resume = () => {

     const [isHovered, setIsHovered] = useState(false);

     const styles = {
    resumeSection: {
        background: 'linear-gradient(135deg, #1c46df, #296f48)',
        color: 'white',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
    },
    container: {
        textAlign: 'center',
        maxWidth: '800px',
    },
    heading: {
        fontSize: '36px',
        marginBottom: '20px',
        fontWeight: 'bold',
    },
    description: {
        fontSize: '18px',
        marginBottom: '30px',
    },
    downloadButton: {
        backgroundColor: isHovered ? '#1c46df' : '#ffffff',
        color: isHovered ? '#ffffff' : '#1c46df',
        padding: '15px 30px',
        borderRadius: '10px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '18px',
        display: 'inline-flex',
        alignItems: 'center',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s, color 0.3s',
    },
};


    return (
        <section id="resume" style={styles.resumeSection}>
            <div style={styles.container}>
                <h2 style={styles.heading}>My Resume</h2>
                <p style={styles.description}>
                    Download my resume to know more about my education, skills, and experience.
                </p>
                <a href="/DPushkar_Resume.pdf" download="DPushkar_Resume.pdf" style={styles.downloadButton}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <FaDownload size={20} style={{ marginRight: '10px' }} /> Download Resume
                </a>
            </div>
        </section>
    );
};


export default Resume;
