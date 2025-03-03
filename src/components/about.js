import React from "react";
import { motion } from "framer-motion";
import "../assets/about.css";

const About = () => {
    return (
        <motion.section 
            className="about-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <h2>About Me</h2>
            <p>
                I'm <span className="highlight">Jagadheesan</span>, a passionate web developer dedicated to crafting
                seamless and visually stunning digital experiences. I specialize in
                creating elegant, high-performance web applications with a keen
                eye for detail and functionality.
            </p>

            {/* New Philosophy Section */}
            <div className="philosophy">
                <p>
                    <em>"Code is not just about syntax; it's about solving real-world problems and creating experiences that matter."</em>
                </p>
            </div>

            {/* Skills Section */}
            <div className="skills">
                <h3>Tech Stack & Skills</h3>
                <p>Python, JavaScript, CSS, React, Django, PostgreSQL, Git</p>
            </div>

            {/* Beyond Coding */}
            <div className="beyond-coding">
                <h3>Beyond Coding</h3>
                <p>When I'm not coding, I enjoy exploring productivity hacks, reading, journaling, photography, video games, and refining my creative projects.</p>
            </div>

            <div className="about-buttons">
                {/* Resume Download from Public Folder */}
                <div className="resume-wrapper">
                    <a href="/resume.pdf" download="Jagadheesan_Resume.pdf" className="resume-button">
                        Download Resume →
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
