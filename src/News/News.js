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
            <p className="links">{result}</p>
    )
}

export default News;