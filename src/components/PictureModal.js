import React from 'react';
import { Dialog, DialogTitle, Typography, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
  modalImage: {
    maxHeight: '450px'
  },
  descriptionText: {
    padding: theme.spacing(2)
  },
  closeButton: {
    fontSize: 25,
    position: 'absolute',
    top: 10,
    right: 10
  }
});

function PictureModal(props) {

  const { classes, open, handleClose, title, imageUrl, descriptions } = props; 

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        disableScrollLock
      >
        <DialogTitle id="dialog-title">{title}</DialogTitle>
        <IconButton onClick={handleClose} aria-label="close-modal" className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
        <img src={imageUrl} className={classes.modalImage} alt={''} />
        <Typography className={classes.descriptionText} variant="body1" color="inherit">
          <ul>
            {descriptions.map((desc) => (
              <li>{desc}</li>
            ))}
          </ul>
        </Typography>

      </Dialog>
    </React.Fragment>
  );
}

export default withStyles(styles)(PictureModal)