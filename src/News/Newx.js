import React from 'react';
// import ArticleModel from '../models/article';

function Newx (props) {
    const { article } = props;
    console.log(article);
    // const handleDelete = () => {
    //     ArticleModel.deleteArticle(article._id)
    //     //   .then()
    //       .catch((err) => console.log(err));
    //   };

    if (props.article) {
        return (
            <div>
                <a key={props.i} href={props.articlelink} className="link"><p>{props.article}</p></a>
                {/* <button className='delete' onClick={handleDelete}>Delete</button> */}
            </div>
        );
    }

}


export default Newx;