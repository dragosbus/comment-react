import React from 'react';


export const Comment = props => {
    return (
        <li className="comment">
            <h4>{props.name}</h4>
            <p>{props.date}</p>
            <p>{props.comment}</p>
        </li>
    );  
};