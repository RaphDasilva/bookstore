import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <header>
    <h1>Bookstore CMC</h1>
    <nav>
      <Link to="/">Books</Link>
      <Link to="/categories">Calculator</Link>
    </nav>
  </header>
);

export default Nav;
