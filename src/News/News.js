import React from 'react';
import Newx from './Newx';
import '../Panel/Panel.css';

function News (props) {
    console.log("news result", props.news);
    let newsList = props.news ? props.news : [];
    let result = newsList.map((newsObj, i) => {
        return <Newx key={i} articlelink={newsObj.link} article={newsObj.link}/>
    })
    return (
            <div className="links">{result}</div>
    )
}

export default News;