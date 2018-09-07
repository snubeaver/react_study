import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [
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
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: 'One Piece',
            poster: 'https://i.ebayimg.com/images/g/vCAAAOSw1ZBUyby5/s-l300.jpg'
          }
        ]
      })
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
