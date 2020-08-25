import React from 'react';
import { withRouter } from 'react-router-dom';
import BallotId from '../Ballot/BallotId'
import BallotModel from '../models/ballot';

class BallotShowPage extends React.Component {
    state = {
        ballot: {},
    };

    componentDidMount() {
        BallotModel.getBallotById(this.props.match.params.id)
            .then((result) => {
                console.log(result);
                this.setState({ballot: result});
            })
            .catch((err) => console.log(err))
    }

    render() {
        console.log('it worked');
        return (
             <BallotId ballot={this.state.ballot} />
        );
    }
}

export default withRouter(BallotShowPage);