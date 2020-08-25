import React from 'react';
import Ballot from '../Ballot/Ballot';
import '../Panel/Panel.css';

export default function BallotPanel(props) {
    const ballotList = props.ballots.map((ballotObj) => {
        return <Ballot ballot={ballotObj} />
    });

    return(
        <div className="panel">
            {ballotList}
        </div>
    );
}