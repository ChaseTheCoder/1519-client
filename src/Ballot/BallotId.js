import React from 'react';
import '../Panel/Panel.css';

function BallotId (props) {
    const { ballotid } = props;

    return (
        <div>
            <p>{ballotid.type}</p>
            <p>{ballotid.question}</p>
        </div>
    )
}

export default BallotId;