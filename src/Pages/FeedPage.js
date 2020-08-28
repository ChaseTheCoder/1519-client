import React from 'react';
import ArticleModel from '../models/article';
import Articles from '../Articles/Articles';
import './FeedPage.css';

class FeedPage extends React.Component {
    state = {
        articles: [],
    };

    componentDidMount() {
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
                <h1>Ballot News Feed</h1>
                <Articles articles={this.state.articles}/>
            </div>
        );
    }
}

export default FeedPage;