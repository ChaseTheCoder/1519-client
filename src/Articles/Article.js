import React from 'react';
import ArticleModel from '../models/article';
import './Article.css'

function Article (props) {
    const { article } = props;
    console.log(article);
    const handleDelete = () => {
        ArticleModel.deleteArticle(article._id)
          .then((result) => props.history.push('/feed'))
          .catch((err) => console.log(err));
      };
    return (
        <div>
            <a href={article.link}><p className="link-feed">{article.link}</p></a>
            <button className='delete' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Article;
