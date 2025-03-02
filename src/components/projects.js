import React from 'react';
import '../assets/projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <ul>
                <li>
                    <h2>Project 1</h2>
                    <p>Description of project 1.</p>
                    <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </li>
                <li>
                    <h2>Project 2</h2>
                    <p>Description of project 2.</p>
                    <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </li>
                {/* Add more projects as needed */}
            </ul>
        </div>
    );
};

export default Projects;
