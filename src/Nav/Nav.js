import React from 'react';
import './Nav.css';

export default function Nav() {
    return (
        <nav>
            
            <ul>
                <li><a id="logo"><span>15</span>19</a></li>
                <div className="route">
                    <li><a id="route" href="#">About</a></li>
                    <li><a id="route" href="#">Ballot</a></li>
                    <li><a id="route" href="#">Feed</a></li>
                    <li><a id="route" href="#">Login</a></li>
                </div>

            </ul>
        </nav>
    );
}