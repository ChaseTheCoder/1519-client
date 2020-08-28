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
                // console.log(result);
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
                <div>
                    <p className="link">https://www.nbcchicago.com/news/local/chicago-politics/kanye-west-kicked-off-illinois-ballots-in-presidential-race/2326172/</p>
                    <p className="link">https://www.washingtonpost.com/politics/biden-federal-workers-unions/2020/08/26/62595932-e71c-11ea-a414-8422fa3e4116_story.html</p>
                    <p className="link">https://www.cnn.com/2020/08/07/us/allan-lichtman-trump-biden-2020-trnd/index.html</p>
                </div>
            </div>
             
        );
    }
}

export default withRouter(BallotShowPage);