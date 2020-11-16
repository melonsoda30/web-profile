import React,{useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import ModalMenu from './components/ModalMenu';

function App() {

  const [isOpen, setValue] = useState(false);
  return (
    <div className="App">
      <Router>
        <Header isOpen={isOpen}/>
        <ModalMenu setValue={setValue} isOpen={isOpen}/>
      </Router>
    </div>
  );
}

export default App;
