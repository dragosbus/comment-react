import React, { Component } from 'react';


export class Form extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm() {
        let name = this._name.value;
        let email = this._email.value;
        let comment = this._comment.value;
        this.props.submitForm(name, email, comment);
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input ref={name => this._name = name}type="text" id="name" className="name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input ref={email => this._email = email} type="email" id="email" className="email" />
                </div>
                <textarea ref={comment => this._comment = comment} name="comment" id="comment" placeholder="Type your comment"></textarea>
            </form>
        );
    }
}