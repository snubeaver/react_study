import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Iron man",
  "Oldboy",
  "Star wars",
]

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/51FhdGyJ6DL.jpg",
  "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/2/25/Iron_Man_poster_3.png/revision/latest?cb=20120420114513",
  "https://scdn.nflximg.net/ipl/13235/513a4a62b1050e6c7fcf15ad6a119f0bc2fbd072.jpg",
  "https://imgc.allpostersimages.com/img/posters/star-wars-the-force-awakens-one-sheet_u-L-F8G58H0.jpg?src=gp&w=300&h=375",
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
