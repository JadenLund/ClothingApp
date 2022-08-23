import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <Link to="/about">About</Link>
            <Link to="/project1">Outfits</Link>
            <Link to="/project2">Inspiration</Link>
        </nav>
    );
}

export default NavBar;
