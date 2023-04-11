import React from 'react';
import './App.css';
import Main from './views/Main';
import About from './views/About';
import CodingResume from './views/CodingResume';
import GeneralResume from './views/GeneralResume';
import Testimonials from './views/Testimonials';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Email from './views/Email';


import { Routes, Route } from 'react-router-dom'

function App() {



  return (
    <div className='App'>
      <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<About />} path='/about'/>
        <Route element={<CodingResume />} path='/resume/coding'/>
        <Route element={<GeneralResume />} path='/resume/general'/>
        <Route element={<Testimonials />} path='/testimonials'/>
        <Route element={<Projects />} path='/projects'/>
        <Route element={<Contact />} path='/contact'/>
        <Route element={<Email />} path='/contact/email'/>
      </Routes>
    </div>
  );
}

export default App;
