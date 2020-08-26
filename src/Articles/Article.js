import React from 'react';

function Article (props) {
    const { article } = props;
    // console.log(article);
    return (
            <a href={article.link}><p>{article.link}</p></a>
    )
}

export default Article;
