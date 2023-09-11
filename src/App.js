import React from 'react';
import './App.css';
import Main from './Components/Main/main';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import About from './Components/About/about';
import Skills from './Components/Skills/skills';


const App = () => {
  return (
    <>
    <Main/>
    <Header/>
    <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    </main>
    
    </>
  )
}

export default App;
