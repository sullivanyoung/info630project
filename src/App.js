import React from 'react';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
    </Router>
  );
}

export default App;