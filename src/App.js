import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {
    greeting: 'hello!',
    movies: [
      {
        title: 'Matrix',
        poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
      },
      {
        title: 'Full Metal Jacket',
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg'
      },
      {
        title: 'Oldboy',
        poster: 'https://m.media-amazon.com/images/M/MV5BYjQwZTc3ODktZjk1ZS00N2Y3LWFlYmUtMmQ4M2IwMjZlYTIwXkEyXkFqcGdeQXVyNjQwMzk1MDM@._V1_UY268_CR1,0,182,268_AL_.jpg'
      },
      {
        title: 'Star Wars',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg'
      }
    ]
  }

  componenetDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "Transpotting",
            poster: 'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg'
          }
        ]
      })
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        {this.state.movie}.map((movie, index) => {
          <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
