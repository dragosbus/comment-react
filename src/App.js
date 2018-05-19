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
      comments: []
    }
    this.submitForm = this.submitForm.bind(this);
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
    console.log(this.state.comments);
  }

  render() {
    return (
      <div className="App">
        <Header comments={this.state.comments} />
        <Form submitForm={(name, email,comment)=>this.submitForm(name,email,comment)}/>
        <Comments comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
