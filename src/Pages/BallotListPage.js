import React from 'react'
import BallotModel from '../models/ballot';
import BallotPanel from '../BallotPanel/BallotPanel';

 class BallotListPage extends React.Component {
     state = {
         ballots: [],
     }

     componentDidMount() {
         BallotModel.getAllBallots()
            .then((result) => {
                // console.log(result.ballot);
                this.setState({ballots: result});
            })
            .catch((err) => console.log(err))
     }


     render() {
        return <BallotPanel ballots={this.state.ballots} />;
     }
        
}

export default BallotListPage;