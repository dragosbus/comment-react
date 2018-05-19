import React, { Component } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Comments } from './components/Comments';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      comments: [],
      togglerChecked: false
    }
    this.submitForm = this.submitForm.bind(this);
    this.toggleComments = this.toggleComments.bind(this);
  }

  submitForm(name, email, comment) {
    let newComment = {
      id: this.state.id,
      name,
      email,
      comment,
      date: new Date().toLocaleString()
    }

    this.setState(prevState => {
      return {
        comments: prevState.comments.concat(newComment),
        id: prevState.id + 1
      }
    });
  }

  toggleComments() {
    this.setState({
      togglerChecked: !this.state.togglerChecked
    });
  }

  render() {
    return (
      <div className="App">
        <Header comments={this.state.comments} toggleComments={this.toggleComments} togglerChecked={this.state.togglerChecked}/>
        <Form submitForm={(name, email,comment)=>this.submitForm(name,email,comment)}/>
        <Comments togglerChecked={this.state.togglerChecked} comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
