import React from 'react';
import { Comment } from './Comment';

export const Comments = props => {
    return (
        <ul className="comments" style={{ display: props.togglerChecked ? "none" : "block" }}>
            {props.comments.map((c, i) => <Comment key={i} name={c.name} date={c.date} comment={c.comment}/>)}
        </ul>
    );  
};