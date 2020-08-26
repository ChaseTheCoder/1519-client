import React from 'react';
import '../Panel/Panel.css';

function News (props) {
    // const { news } = props;
    console.log(props);
    return (
        <div>
            <p>{props.ballot.articles}</p>
        </div>
    )
}

export default News;