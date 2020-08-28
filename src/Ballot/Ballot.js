import React from 'react';
import { Link } from 'react-router-dom';
import '../Panel/Panel.css';

function Ballot (props) {
    const { ballot } = props;

    return (
        <Link to={`/ballot/${ballot._id}`}>
            <p className="link">{ballot.question}</p>
        </Link>
    )
}

export default Ballot;