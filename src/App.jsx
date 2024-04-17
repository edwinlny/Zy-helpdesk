import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Home from './Pages/Home';
import Admin from './Pages/Admin';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
