import React from 'react';
import '../Panel/Panel.css';

function BallotId (props) {
    const { ballot } = props;

    return (
        <div className="panel">
            <p>{ballot.question}</p>
        </div>
    )
}

export default BallotId;