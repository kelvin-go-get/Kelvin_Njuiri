import React from 'react';
import './App.css';
import Main from './Components/Main/main';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import About from './Components/About/about';


const App = () => {
  return (
    <>
    <Main/>
    <Header/>
    <main className='main'>
    <Home/>
    <About/>
    </main>
    
    </>
  )
}

export default App;
