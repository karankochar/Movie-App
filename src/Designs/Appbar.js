// import React, {Component} from 'react';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Input from '@material-ui/core/Input'; 
// import InputAdornment from '@material-ui/core/InputAdornment';




// export default class SimpleAppBar extends Component{

//   state = {searchText: ""};
//   searchTextChanged = e => this.setState({searchText: e.target.value})
//   search = async e => {
//     e.preventDefault();
//     const {searchText} = this.state;
//     const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2c0c5440329269a1ed7322538d49d2fc&query=${searchText}&language=en-US&page=1`);
//     const json = await response.json();
//     this.setState({movies: json.results}); 
//   }
//   render(){

//   const {searchText} = this.state;
  

//   return (
//     <div >
//       <AppBar position="fixed" color="primary">
//         <Toolbar>
//           <Typography variant="h6" color="inherit">
//             Top-rated Movies
//           </Typography>
//           <form onSubmit = {this.search}>
//             <Input
//               type="search"
//               value={searchText}
//               onChange = {this.searchTextChanged}
//               startAdornment={
//                 <InputAdornment>
//                 <span role='img' aria-label="Search"/>
//                 </InputAdornment>
//               }
//               />         
//           </form>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
// }
