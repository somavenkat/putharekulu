import React from 'react';
import {NavLink} from 'react-router-dom';

const navbar = (props) => {
    return(    
        <div>
            <h1>{props.title}</h1>
            <div className="navbar">
                <ul>
                    <li><NavLink activeClassName="activate" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="activate" to="/about">About</NavLink></li>
                    <li><NavLink activeClassName="activate" to="/services">Services</NavLink></li>
                    <li><NavLink activeClassName="activate" to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
export default navbar;