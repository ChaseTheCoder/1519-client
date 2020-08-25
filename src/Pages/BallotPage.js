import React from 'react';
import Ballot from '../Ballot/Ballot'
import BallotModel from '../models/ballot';

class BallotPage extends React.Component {
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
        console.log(this.props);
        return <Ballot ballot={this.state.ballot} />
    }
}

export default BallotPage;