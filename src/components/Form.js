import React, { Component } from 'react';


export class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="email" />
                </div>
                <textarea name="comment" id="comment" placeholder="Type your comment"></textarea>
            </form>
        );
    }
}