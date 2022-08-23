import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <Link to="/about">About</Link>
            <Link to="/project1">Make an Outfit</Link>
            <Link to="/project2">Get Inspired</Link>
        </nav>
    );
}

export default NavBar;
