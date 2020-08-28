import React from 'react';
import { Link } from 'react-router-dom';
import '../Panel/Panel.css';

function Ballot (props) {
    const { ballot } = props;

    return (
        <div className="ballot-card">
            <Link to={`/ballot/${ballot._id}`}>
                <p className="ballot-link">{ballot.question}</p>
            </Link>
        </div>
    )
}

export default Ballot;