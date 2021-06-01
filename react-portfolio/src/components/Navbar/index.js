import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/work">Work</Link>
            </li>
            <li>
                <Link to="/contact">Contact Me</Link>
            </li>
        </ul>
    </nav>
}

export default Navbar;