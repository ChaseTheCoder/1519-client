import React from 'react';
import { withRouter } from 'react-router-dom';
import BallotId from '../Ballot/BallotId';
import Articles from '../Articles/Articles';
import BallotModel from '../models/ballot';
import ArticleModel from '../models/article';
import CreateArticleForm from '../Articles/ArticleCreate';
import News from '../News/News';

class BallotShowPage extends React.Component {
    state = {
        ballot: {},
        articles: []
    };

    componentDidMount() {
        BallotModel.getBallotById(this.props.match.params.id)
            .then((result) => {
                // console.log(result);
                this.setState({ballot: result});
            })
            .catch((err) => console.log(err))

        ArticleModel.getAllArticles()
            .then((result) => {
                // console.log(result);
                this.setState({articles: result});
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div className="panel">
                <BallotId ballotid={this.state.ballot} />
                <CreateArticleForm ballotid={this.state.ballot._id}/>
                {/* <Articles articles={this.state.articles}/> */}
                <News ballot={this.state.ballot} />
            </div>
             
        );
    }
}

export default withRouter(BallotShowPage);