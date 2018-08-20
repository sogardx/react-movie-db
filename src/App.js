import React, { Component } from 'react';
// Components 
import Header from './Header';
import MovieList from './MovieList';
// App 
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList />
      </div>
    );
  }
}

export default App;
