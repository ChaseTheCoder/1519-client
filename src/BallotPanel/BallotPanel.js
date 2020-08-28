import React from 'react';
import Ballot from '../Ballot/Ballot';
import '../Panel/Panel.css';

export default function BallotPanel(props) {
    const ballotList = props.ballots.map((ballotObj) => {
        console.log(ballotObj)
        return <Ballot key={ballotObj._id}ballot={ballotObj} />
    });

    return(
        <div className="panel">
            <h1 className="heading">Candidates</h1>
            {ballotList}
        </div>
    );
}