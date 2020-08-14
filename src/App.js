import React from 'react';
import './App.css';

import Header from './components/Header';
import Showcase from './components/Showcase';
import About from './components/About';
import RecentWork from './components/RecentWork';
import Footer from './components/Footer'

function App() {
  return (
    <div className='app'>
      <div className="showcase-container">
        <Header />
        <Showcase />
      </div>
      <About />
      <RecentWork />
      <Footer />
    </div>
  );
}

export default App;
