import React from 'react';
import Newx from './Newx';
import '../Panel/Panel.css';

function News (props) {
    console.log(props.news);
    let newsList = props.news ? props.news : [];
    let result = newsList.map((newsObj, i) => {
        return <Newx key={i} articlelink={newsObj.link} article={newsObj.link}/>
    })
    return (
        <div>
            <p>{result}</p>
        </div>
    )
}

export default News;

// export default function Articles(props) {
//     // console.log(props);
//     const articleList = props.articles.map((articleObj) => {
//         return <Article key={articleObj._id} article={articleObj} />
//     });

//     return(
//         <div>
//             {articleList}
//         </div>
//     );
// }