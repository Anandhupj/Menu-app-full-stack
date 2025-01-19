import React, { useState } from 'react'
import { Link , NavLink} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
    <Link to="/" className="logo">
      <h2 className='A'>DEEP NET</h2><h2 className='B'>SOFT</h2>
    </Link>
    
    {/* Hamburger Menu */}
    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
      ☰
    </div>

    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
      <NavLink to="/create-menu" activeclassname="active"><p>HOME</p></NavLink>
      <NavLink to="/"><p>MENU</p></NavLink>
      <NavLink to="/a"><p>MAKE A RESERVATION</p></NavLink>
      <NavLink to="/c"><p>CONTACT US</p></NavLink>
    </ul>
  </nav>
);
};

export default Navbar