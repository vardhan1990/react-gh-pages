import React, { Component } from 'react';
import ProfilePic from './profilepic.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-sections">
        <img src={ProfilePic} className="App-section1" />
        <header className="App-section2">
          <p className="header">Vardhan Dugar</p>
          <p className="text">I live in Seattle.</p>
          <p className="text">I write code for a living.</p>
          <p className="text">I like to ski, run, swim and hike.</p>
          <p className="text">I like good food and good board games.</p>
          <p className="text">I walk dogs.</p>
          <p className="text">I will add more content to this site to make it worth your while.</p>
        </header>
      </div>
    );
  }
}

export default App;
