import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav id="navbar">
            <div className="navlinks">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </div>
        </nav>
    );

}