import React from 'react';
import { AppBar as AppAppBar, Button, ButtonGroup } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

const styles = {

  appBar: {
    minHeight: 65
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
    },
  },
    
}));

function AppBar(props) {

    const classes = useStyles();
  
    return (
      <React.Fragment>
        <AppAppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography edge="start" variant="h6" className={classes.appBarHeading}>
              Horizon Clearing Inc.
            </Typography>
            <ButtonGroup variant="text" color="inherit" className={classes.appBarButtons}>
              <Button onClick={() => props.setView('commercial')}>Commercial</Button>
              <Button onClick={() => props.setView('residential')}>Residential</Button>
              <Button>Contact Us</Button>
            </ButtonGroup>
          </Toolbar>
        </AppAppBar>
      </React.Fragment>
    )
}

export default withStyles(useStyles)(AppBar);