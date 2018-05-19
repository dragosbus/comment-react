import React, { Component } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Comments } from './components/Comments';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }
  render() {
    return (
      <div className="App">
        <Header comments={this.state.comments} />
        <Form />
        <Comments comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
