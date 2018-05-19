import React from 'react';


export const Header = props => {
    return (
        <header>
            {props.comments.length < 1 ? <h1>No comment avaible</h1> : props.comments.length === 1 ? <h1>{props.comments.length} comment</h1> : <h1>{props.comments.length} comments</h1>}
            <input checked={props.togglerChecked} onClick={props.toggleComments} type="checkbox"/>
        </header>
    );
};