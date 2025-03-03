import React from "react";
import { motion } from "framer-motion";
import "../assets/projects.css";

const Projects = () => {
    return (
        <motion.section 
            className="projects-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <h2>Featured Creations</h2>

            {/* Linear Box Around Projects */}
            <motion.div 
                className="projects-wrapper"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="projects-container">
                    {/* Personal Portfolio Project */}
                    <motion.div 
                        className="project-box"
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>Personal Portfolio</h3>
                        <p>Minimal. Modern. Impactful. A visually stunning portfolio that represents my skills and creativity.</p>
                        <motion.a 
                            href="https://github.com/Jagadheesan-T/Portfolio" 
                            className="explore-btn"
                            whileHover={{ backgroundColor: "#ffffff", color: "#0d0d0d" }}
                        >
                            Explore Project →
                        </motion.a>
                    </motion.div>

                    {/* To-Do Application Project */}
                    <motion.div 
                        className="project-box"
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>To-Do Application</h3>
                        <p>Efficiency redefined. A seamless task management tool designed for productivity and simplicity.</p>
                        <motion.a 
                            href="https://github.com/yourusername/todo-app" 
                            className="explore-btn"
                            whileHover={{ backgroundColor: "#ffffff", color: "#0d0d0d" }}
                        >
                            Explore Project →
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Projects;
