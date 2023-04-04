import React from 'react';
import './App.css';
import Main from './views/Main';
import About from './views/About';
import Resume from './views/Resume';
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
        <Route element={<Resume />} path='/resume'/>
        <Route element={<Testimonials />} path='/testimonials'/>
        <Route element={<Projects />} path='/projects'/>
        <Route element={<Contact />} path='/contact'/>
        <Route element={<Email />} path='/contact/email'/>
      </Routes>
    </div>
  );
}

export default App;
