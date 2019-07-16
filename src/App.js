import React ,{Component} from 'react';
import './App.css'
import Moviecard from './Components/moviecard';
import MovieDialogue from './Components/MovieDialogue';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input'; 
import InputAdornment from '@material-ui/core/InputAdornment';



const originalMovies =
[
  {id:1, title:"Ishaqzaade"},
  {id:2, title:"Carry on Jatta"},
  {id:3, title:"She's out of you league"}
];
  


class App extends Component{
  

  state = {movies : [], selectedMovie : null, searchText: ""}

  selectMovie = (movie) => {
    return this.setState({ selectedMovie: movie });
  };
  clearMovie = () => this.setState({selectedMovie: null});
  searchTextChanged = e => this.setState({searchText: e.target.value})
  search = async e => {
    e.preventDefault();
    const {searchText} = this.state;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2c0c5440329269a1ed7322538d49d2fc&query=${searchText}&language=en-US&page=1`);
    const json = await response.json();
    this.setState({movies: json.results}); 
  }

  async componentDidMount(){ 
    // setTimeout(() =>
    // this.setState({movies : originalMovies}), 5000)
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=2c0c5440329269a1ed7322538d49d2fc&language=en-US&page=1`)
    const json = await response.json();
    this.setState({movies: json.results});
  }

  render(){

    const {movies, selectedMovie, searchText} = this.state;
    return(
      <div >
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Top-rated Movies
          </Typography>
          <form onSubmit = {this.search} class="input">
            <Input
              type="search"
              value={searchText}
              onChange = {this.searchTextChanged}
              startAdornment={
                <InputAdornment>
                <span role='img' aria-label="Search"/>
                </InputAdornment>
              }
              />         
          </form>
        </Toolbar>
      </AppBar>

        <div className='App'>
        {movies.map(movie => <Moviecard movie={movie} selectMovie={this.selectMovie }/>)}
        </div>
        <MovieDialogue movie={selectedMovie} handleClose = {this.clearMovie}/>
      </div>

    );
  }

}


export default App;
