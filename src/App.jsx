import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import About from './Components/About/about';
import Skills from './Components/Skills/skills';
import Services from './Components/Services/services';
import Qualifications from './Components/qualifications/qualifications';
import Contact from './Components/contact/contact';
import Footer from './Components/Footer/footer';
import Scrollup from './Components/Scrollup/scrollup';
import Projects from './Components/Projects/Projects';


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
    <Projects/>
    <Contact/>
    </main>
    <Footer/>
    <Scrollup/>
    
    </>
  )
}

export default App;
