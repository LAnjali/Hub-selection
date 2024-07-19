import React from 'react';
import './navbar.css';

const Navbar = () => {
  const username = localStorage.getItem('username'); // Adjust this as per your actual logic

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>(¯´•._.•   🎀  𝒜𝒩𝒥𝒜𝐿𝐼'𝒮 𝒩🌞𝒯𝐸  🎀   •._.•´¯(</h1>
      </div>
      <div className="navbar-user">
        <p> {username}</p>
      </div>
    </div>
  );
};

export default Navbar;
