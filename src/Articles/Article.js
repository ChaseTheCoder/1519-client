import React from 'react';
import ArticleModel from '../models/article';

function Article (props) {
    const { article } = props;
    console.log(article);
    const handleDelete = () => {
        ArticleModel.deleteArticle(article._id)
          .then(window.location.reload(false))
          .catch((err) => console.log(err));
      };
    return (
        <div className="link-card">
            <a href={article.link}><p className="link-feed">{article.link}</p></a>
            <button className='delete-feed' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Article;
