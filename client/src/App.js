import React from 'react';
import './App.css';
import Main from './views/Main';
import About from './components/About';
import CodingResume from './components/CodingResume';
import GeneralResume from './components/GeneralResume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Email from './components/Email';


import { Routes, Route } from 'react-router-dom'

function App() {



  return (
    <div className='App'>
      <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<About />} path='/about'/>
        <Route element={<CodingResume />} path='/resume'/>
        <Route element={<GeneralResume />} path='/resume/general'/>
        <Route element={<Projects />} path='/projects'/>
        <Route element={<Contact />} path='/contact'/>
        <Route element={<Email />} path='/contact/email'/>
      </Routes>
    </div>
  );
}
// import myPDF from '../Assets/Peter.Disney.Resume.October.2022.pdf';
export default App;
