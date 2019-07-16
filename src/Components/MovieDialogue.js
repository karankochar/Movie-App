import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardMedia from '@material-ui/core/CardMedia';
import '../App.css'

export default class MovieDialogue extends React.Component {

render() {
    const { movie, handleClose } = this.props;
    let title = null;
    let content = null;
    if (movie){
        title = <DialogTitle>{movie.title}</DialogTitle>
        
        content = ( 
            <DialogContent>
            <DialogContentText>
            {movie.overview}
            </DialogContentText>
            <CardMedia 
              className = "movie-detail-image"
              image = {`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
              title = {movie.title}
              />
              <br></br>
            <TextField
              
              label="Release Date"
              type="date"
              value = {movie.release_date}
              fullWidth
              disabled
            />
            <TextField
              
              label="Vote Average"
              type="number"
              value = {movie.vote_average}
              fullWidth
              disabled
            />
            <TextField
              
              label="Popularity"
              type="number"
              value = {movie.popularity}
              fullWidth
              disabled
            />
              <TextField
              
              label="Original Name"
              type="string "
              value = {movie.original_title}
              fullWidth
              disabled
            />
            
            
            <TextField
              
              label="Original language"
              type="string "
              value = {movie.original_language}
              fullWidth
              disabled
            />
            
          </DialogContent>
            );
    }
    
  return (
    <div>
      
      <Dialog open={!!movie} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        {title}
        {content}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
    }
}
