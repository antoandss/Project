import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import "tachyons";

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul className="navbar-elements">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;