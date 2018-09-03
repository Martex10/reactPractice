import React from 'react';
import './Nav.css';

const Nav= (props) => (
    <header>
        <h1>RecipeApp</h1>
        <nav>
            <li><a href="#">New Recipe</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact US</a></li>
        </nav>
    </header>
);

export default Nav;
