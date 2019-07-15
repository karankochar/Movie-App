import React ,{Component} from 'react';
import './App.css'
import Moviecard from './Components/moviecard';
import Appbar from './Designs/Appbar';
import MovieDialogue from './Components/MovieDialogue';

const originalMovies =
[
  {id:1, title:"Ishaqzaade"},
  {id:2, title:"Carry on Jatta"},
  {id:3, title:"She's out of you league"}
];
  


class App extends Component{
  

  state = {movies : [], selectedMovie : null}

  selectMovie = movie => this.setState({selectedMovie: movie});
  clearMovie = () => this.setState({selectedMovie: null});

  async componentDidMount(){
    // setTimeout(() =>
    // this.setState({movies : originalMovies}), 5000)
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=2c0c5440329269a1ed7322538d49d2fc&language=en-US&page=1`)
    const json = await response.json();
    this.setState({movies: json.results});
  }

  render(){

    const {movies, selectedMovie} = this.state;
    return(
      <div>
        <Appbar/>
        <div className='App'>
        {movies.map(movie => <Moviecard movie={movie} selectMovie={this.selectMovie }/>)}
        </div>
        <MovieDialogue movie={selectedMovie} handleClose = {this.clearMovie}/>
      </div>

    );
  }

}


export default App;
