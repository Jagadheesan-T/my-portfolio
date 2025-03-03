import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import "./App.css";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Home />
        </Router>
    );
};

export default App;
