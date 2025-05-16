import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Resume from './Components/Resume';

function App() {

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])

  return (
    <div >
    <Navbar/>
    <Home/>
    <About/>
    <Resume/>
    <Skills/>
    <Projects/>
    <Contact/>
  
    </div>
  );
}




export default App;
