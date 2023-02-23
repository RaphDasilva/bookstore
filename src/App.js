import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
