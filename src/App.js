import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

class App extends Component {
  state= {}

  componentDidMount(){
    this._getMovies();
  }
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie);
      return <Movie 
        title={movie.title_english} 
        poster={movie.large_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis = {movie.synopsis}
      />
    })
    return movies;
  }
  _getMovies = async () =>{
    // wait until call api to finish, then setState
    const movies = await this._callApi();
    console.log(this._callApi());
    this.setState({
      movies
    });
  };
  _callApi= () =>{
    return(
      fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => {return json.data.movies})
      .catch(err => console.log(err))
    )
  }
  
  render() {
    return (
      <div className="App">
        {this.state.movies? this._renderMovies() : "Loading"}
      </div>
    );
  }
}



export default App;
