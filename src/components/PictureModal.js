import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    
  },
});

function PictureModal(props) {

  return (
    <div>
      <Dialog
        open={props.open}
      >
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          Dialog Content!
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PictureModal;