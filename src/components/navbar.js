import React from "react";
import { Link } from "react-scroll";
import "../assets/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="home" smooth={true} duration={500} spy={true} activeClass="active">Home</Link></li>
                <li><Link to="projects" smooth={true} duration={500} spy={true} activeClass="active">Projects</Link></li>
                <li><Link to="about" smooth={true} duration={500} spy={true} activeClass="active">About</Link></li>
                <li><Link to="contact" smooth={true} duration={500} spy={true} activeClass="active">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;