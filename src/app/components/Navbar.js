"use client";
import "../styles/globals.css";
import React from 'react'

const Navbar = () => {
  return (
    <header className="navbar">
    <div className="logo">
        <a href="/">B<strong>Strong</strong> 💪</a>
    </div>
        <nav>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/workouts">Workouts</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
</header>
  )
}

export default Navbar
