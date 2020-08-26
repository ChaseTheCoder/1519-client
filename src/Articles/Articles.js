import React from 'react';
import Article from './Article';
import '../Panel/Panel.css';

export default function Articles(props) {
    console.log(props);
    const articleList = props.articles.map((articleObj) => {
        return <Article key={articleObj._id} article={articleObj} />
    });

    return(
        <div>
            {articleList}
        </div>
    );
}