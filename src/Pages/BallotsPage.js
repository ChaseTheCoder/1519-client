import React from 'react'
import BallotModel from '../models/ballot';
import BallotPanel from '../BallotPanel/BallotPanel';

 class BallotsPage extends React.Component {
     state = {
         ballots: [],
     }

     componentDidMount() {
         BallotModel.getAllBallots()
            .then((result) => {
                console.log(result);
                this.setState({ballots: result});
            })
            .catch((err) => console.log(err))
     }


     render() {
        return <BallotPanel ballots={this.state.ballots} />;
     }
        
}

export default BallotsPage;