import React from 'react';
import './App.css';
import Main from './Components/Main/main';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'


const App = () => {
  return (
    <>
    <Main/>
    <Header/>
    <main className='main'>
    <Home/>
    </main>
    
    </>
  )
}

export default App;
