import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Main from "./components/Main";
import About from "./components/About";
import React from "react";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
            <Footer/>
        </>
    );
}

export default App;
