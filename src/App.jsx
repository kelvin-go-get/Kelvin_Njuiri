import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import About from './Components/About/about';
import Skills from './Components/Skills/skills';
import Services from './Components/Services/services';
import Qualifications from './Components/qualifications/qualifications';


const App = () => {
  return (
    <>
    <Header/>
    <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Qualifications/>
    </main>
    
    </>
  )
}

export default App;
