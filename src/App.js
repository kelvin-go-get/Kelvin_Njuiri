import React from 'react';
import './App.css';
import Main from './Components/Main/main';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import About from './Components/About/about';
import Skills from './Components/Skills/skills';
import Services from './Components/Services/services';


const App = () => {
  return (
    <>
    <Main/>
    <Header/>
    <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    </main>
    
    </>
  )
}

export default App;
