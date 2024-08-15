import React from 'react';
import Navbar from './components/Navbar';
import Home from './components /Home';
import Footer from './components /Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home articleTitle="first" />  
      <Footer />
    </div>
  );
}

export default App;
