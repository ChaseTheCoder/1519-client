import React from 'react';
import { withRouter } from 'react-router-dom';
import BallotId from '../Ballot/BallotId';
import Articles from '../Articles/Articles';
import BallotModel from '../models/ballot';
import ArticleModel from '../models/article';
import CreateArticleForm from '../Articles/ArticleCreate';

class BallotShowPage extends React.Component {
    state = {
        ballot: {},
        // articles: []
    };

    componentDidMount() {
        BallotModel.getBallotById(this.props.match.params.id)
            .then((result) => {
                console.log(result);
                this.setState({ballot: result});
            })
            .catch((err) => console.log(err))

        ArticleModel.getAllArticles()
            .then((result) => {
                console.log(result);
                this.setState({articles: result});
            })
            .catch((err) => console.log(err))
    }

    // createArticle = (article) => {
    //     let newArticle = {
    //         link: article,
    //     };
    //     ArticleModel.createArticle(newArticle).then((res) => {
    //         let articles = this.state.articles;
    //         let newArticles = articles.push(res.data);
    //         this.setState({newArticles});
    //     });
    // };

    render() {
        return (
            <div className="panel">
                <BallotId ballotid={this.state.ballot} />
                {/* <CreateArticleForm createArticle={this.createArticle} /> */}
                <CreateArticleForm />
                <Articles articles={this.state.articles}/>
            </div>
             
        );
    }
}

export default withRouter(BallotShowPage);