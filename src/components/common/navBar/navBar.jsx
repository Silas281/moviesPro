import React from 'react';
import './navBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MoviesGrid Pro</div>
      <div className="search-bar">
        <input type="text" placeholder="Search movies..." />
        <button>Search</button>
      </div>
      <div className="navbar-links">
        <a className="nav-link">Movies</a>
        <a className="nav-link">TV Shows</a>
      </div>
    </nav>
  );
}

export default Navbar;
