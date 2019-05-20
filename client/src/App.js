import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={Home} />
        <Route exact path="/MovieList" component={MovieList} />
        <Route path = "/Movies/:id" component={MovieList} />
        
      </div>
    );
  }
}