import React,{useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import ModalMenu from './components/ModalMenu';

function App() {

  const [isOpen, setValue] = useState(false);
  return (
    <div className="App">
      <Router>
        <Header isOpen={isOpen}/>
        <ModalMenu setValue={setValue} isOpen={isOpen}/>
        <main className="main"
>asdasdasdasd</main>        <Footer/>
      </Router>
    </div>
  );
}

export default App;
