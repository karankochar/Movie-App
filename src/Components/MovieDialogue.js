import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class MovieDialogue extends React.Component {

render() {
    const { movie, handleClose } = this.props;
    let title = null;
    
    if (movie){
        title = <DialogTitle id="form-dialog-title">{movie.title}</DialogTitle>
    }
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={!!movie} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        {title}
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
    }
}
