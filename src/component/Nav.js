import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(){
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;