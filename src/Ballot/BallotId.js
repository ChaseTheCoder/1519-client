import React from 'react';
import '../Panel/Panel.css';

function BallotId (props) {
    const { ballotid } = props;

    return (
        <div>
            <h1 className="heading">{ballotid.type}</h1>
            <p className="sub-heading">{ballotid.question}</p>
        </div>
    )
}

export default BallotId;