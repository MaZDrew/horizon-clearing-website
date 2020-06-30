import React from 'react';
import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@material-ui/core';
import { HideOnScroll, setHash } from '../utils/scrollingUtil';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  appBar: {
    minHeight: '65px !important'
  },
  appBarHeading: {
    [theme.breakpoints.up('sm')]: {
      flex: 1,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  appBarButtons: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      margin: 'auto',
      paddingTop: 7
    }
  }
});

function CustomAppBar(props) {

  const { classes } = props;

  return (
    <HideOnScroll threshold={100}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography edge="start" variant="h6" className={classes.appBarHeading}>
            Horizon Clearing Inc.
          </Typography>
          <ButtonGroup variant="text" color="inherit" className={classes.appBarButtons}>
            <Button onClick={() => setHash('commercial')}>Commercial</Button>
            <Button onClick={() => setHash('residential')}>Residential</Button>
            <Button onClick={() => setHash('contactus')}>Contact Us</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default withStyles(styles)(CustomAppBar);