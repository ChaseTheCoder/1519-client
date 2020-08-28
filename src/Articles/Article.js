import React from 'react';
import './Article.css'
function Article (props) {
    const { article } = props;
    // console.log(article);
    return (
            <a href={article.link}><p className="link-feed">{article.link}</p></a>
    )
}

export default Article;
