import React from 'react';


// function Newx (props) {
//     const { article } = props;
//     let linkList = null;
//     if (article) {
//         linkList = article.map((article, i) => <a key={i} article={article} href={article}><p>{article}</p></a>)
//     }

//     return ({linkList});
// }

function Newx (props) {
    if (props.article) {
        return <a key={props.i} href={props.articlelink}><p>{props.article}</p></a>
    }

}


export default Newx;