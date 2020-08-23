import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><NavLink id="logo" to='/'><span>15</span>19</NavLink></li>
                <div className="route">
                    <li><NavLink id="route" to="/about">About</NavLink></li>
                    <li><NavLink id="route" to="/ballot">Ballot</NavLink></li>
                    <li><NavLink id="route" to="/feed">Feed</NavLink></li>
                    <li><NavLink id="route" to="/login">Login</NavLink></li>
                </div>
            </ul>
        </nav>
    );
}