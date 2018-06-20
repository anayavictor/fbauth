import React, { Component } from 'react';
import logo from './img/f-icon.svg';
import './App.css';
import Facebook from './components/Facebook';

class App extends Component {

  state = {
    text: 'To get started, autheticate with Facebook'
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Facebook Auth</h1>
        </header>
        <p className="App-intro">
          {this.state.text}
        </p>
        <Facebook />
      </div>
    );
  }
}

export default App;
