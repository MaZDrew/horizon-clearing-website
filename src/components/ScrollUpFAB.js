import React from 'react';
import { Fab } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { ShowOnScroll, scrollToTop } from '../utils/scrollingUtil';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  fab: {
    position: 'fixed',
    right: 15,
    bottom: 15,
    zIndex: 3
  }
});

function ScrollUpFab(props) {

  const { classes } = props;

  return (
    <ShowOnScroll threshold={100}>
      <Fab onClick={() => scrollToTop()} size="medium" color="primary" className={classes.fab}>
        <ExpandLess />
      </Fab>
    </ShowOnScroll>
  )
}

export default withStyles(styles)(ScrollUpFab);