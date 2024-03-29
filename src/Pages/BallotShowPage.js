import React from 'react';
import { withRouter } from 'react-router-dom';
import BallotId from '../Ballot/BallotId';
import BallotModel from '../models/ballot';
import CreateArticleForm from '../Articles/ArticleCreate';
import News from '../News/News';
import './BallotShowPage.css'

class BallotShowPage extends React.Component {
    state = {
        ballot: {},
    };

    componentDidMount() {
        BallotModel.getBallotById(this.props.match.params.id)
            .then((result) => {
                console.log("results", result);
                this.setState({ballot: result});
            })
            .catch((err) => console.log(err))
    }

    render() {
        console.log(this.state.ballot);
        return (
            <div className="panel">
                <BallotId ballotid={this.state.ballot} />
                <CreateArticleForm ballotid={this.state.ballot._id}/>
                <News news={this.state.ballot.articles} />
            </div>
             
        );
    }
}

export default withRouter(BallotShowPage);