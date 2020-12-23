import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import ModalMenu from './components/ModalMenu';
import Home from './screens/Home';

function App() {
  const [isOpen, setValue] = useState(false);
  return (
    <div className="App">
      <Router>
        <Header isOpen={isOpen} />
        <div class="sideinfo">
          <div class="sideinfo__inner">
            <p class="sideinfo__summary">
              <span class="sideinfo__summary-text">
                <span class=" type-outer" id="type-summary">
                  <span class="Typewriter__wrapper">Lorem ipsum dolor sit amet</span>
                </span>
              </span>
            </p>
          </div>
        </div>
        <ModalMenu setValue={setValue} isOpen={isOpen} />
        <main className="main">
          <Home />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
