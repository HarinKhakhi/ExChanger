import React from 'react'

import './App.css';

import Header from './components/Header/Header.js'
import Main from './components/Main/Main.js'
import Footer from './components/Footer/Footer.js'

import nosmile2 from './nosmile2.jpg'

function App() {
  return (
    <div className="app">
      <Header/>
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
