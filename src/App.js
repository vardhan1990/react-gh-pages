import React, { Component } from 'react';
import ProfilePic from './profilepic.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-sections">
        <img src={ProfilePic} alt-text="Profile Picture" className="App-section1" />
        <header className="App-section2">
          <h1 className="header">Vardhan Dugar</h1>
          <h3 className="text">I live in Seattle.</h3>
          <h3 className="text">I write code for a living.</h3>
          <h3 className="text">I like to ski, run, raft, swim and hike.</h3>
          <h3 className="text">I like good food and good board games.</h3>
          <h3 className="text">I walk dogs. Others', not my own. I am not adult enough to have my own pets.</h3>
          <h3 className="text">I will add more content to this site to make it worth your while.</h3>
        </header>
      </div>
    );
  }
}

export default App;
