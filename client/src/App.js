import React from 'react';
import './App.css';
import Main from './views/Main';
import About from './views/About';
import Resume from './views/Resume';
import Testimonials from './views/Testimonials';
import Works from './views/Works';
import Contact from './views/Contact';


import { Routes, Route } from 'react-router-dom'

function App() {



  return (
    <div className='App'>
      <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<About />} path='/about'/>
        <Route element={<Resume />} path='/resume'/>
        <Route element={<Testimonials />} path='/testimonials'/>
        <Route element={<Works />} path='/works'/>
        <Route element={<Contact />} path='/contact'/>
      </Routes>
    </div>
  );
}

export default App;
