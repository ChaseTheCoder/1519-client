import React from 'react';

function Newx (props) {
    if (props.article) {
        return <a key={props.i} href={props.articlelink} className="link"><p>{props.article}</p></a>
    }

}


export default Newx;