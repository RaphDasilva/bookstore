import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import style from '../style/NavBar.module.css';

const Nav = () => (
  <header className={style.nav}>
    <h1>Bookstore CMC</h1>
    <div className={style.navContainer}>
      <nav className={style.menue}>
        <Link className={style.link} to="/">Books</Link>
        <Link className={style.link} to="/categories">Categories</Link>
      </nav>
      <div className={style.iconContainer}>
        <button type="button" className={style.navIconBtn}>
          <FaUser />
        </button>
      </div>
    </div>
  </header>
);

export default Nav;
