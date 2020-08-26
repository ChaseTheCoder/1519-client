import React from 'react';

function Article (props) {
    const { article } = props;
    console.log(article);
    return (
            <p>{article.link}</p>
    )
}

export default Article;
