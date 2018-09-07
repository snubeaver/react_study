import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51FhdGyJ6DL.jpg",
  },
  {
    title: "Iron man",
    poster: "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/2/25/Iron_Man_poster_3.png/revision/latest?cb=20120420114513",
  },
  {
    title: "Oldboy",
    poster: "https://scdn.nflximg.net/ipl/13235/513a4a62b1050e6c7fcf15ad6a119f0bc2fbd072.jpg",
  },
  {
    title: "Star wars",
    poster: "https://imgc.allpostersimages.com/img/posters/star-wars-the-force-awakens-one-sheet_u-L-F8G58H0.jpg?src=gp&w=300&h=375",
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster}/>
        })}
      </div>
    );
  }
}

export default App;
