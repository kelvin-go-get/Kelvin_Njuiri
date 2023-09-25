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
    <Contact/>
    <Footer/>
    </main>
    
    </>
  )
}

export default App;
