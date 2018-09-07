import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>Movie</h1>
      </div>
    )
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/2/25/Iron_Man_poster_3.png/revision/latest?cb=20120420114513" />
    )
  }
}

export default Movie
