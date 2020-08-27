import React from 'react';
import Newx from './Newx';
import '../Panel/Panel.css';

function News (props) {
    console.log(props.news);
    let newsList = null;

    return (
        <div>
            <p>{newsList}</p>
            {/* <Newx article={props.news}/> */}
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