import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, ButtonGroup, Fab } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import HideOnScroll from "../utils/HideOnScroll";
import HomePage from './HomePage';
import CompanyHero from './CompanyHero';
import CompanyDetails from './CompanyDetails';

const useStyles = makeStyles((theme) => ({

  root: {
    postion: 'relative'
  },

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

  picture: {
    width: '50%',
    height: '50%'
  },

  fabScrollToTop: {
    position: 'fixed',
    right: 35,
    bottom: 15,
    zIndex: 3
  },

  icon: {
    fontSize: 150,
    marginTop: 75,
    paddingLeft: 75
  },

  infoText: {
    textAlign: 'center',
    width: 300,
    marginTop: 20
  }
}));

export default function Main(props) {

  const classes = useStyles();

  const setView = (offset) => {
    
  }

  return (
    <div className={classes.root}>
      
      <HideOnScroll threshold={100}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography edge="start" variant="h6" className={classes.appBarHeading}>
              Horizon Clearing Inc.
            </Typography>
            <ButtonGroup variant="text" color="inherit" className={classes.appBarButtons}>
              <Button onClick={() => setView(1)}>Commercial</Button>
              <Button onClick={() => setView(2)}>Residential</Button>
              <Button>Contact Us</Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <HomePage />
      
      <CompanyDetails/>

      <CompanyHero/>

      <Fab onClick={() => setView(0)} color="primary" className={classes.fabScrollToTop}>
        <ExpandLess />
      </Fab>

    </div>
  )
}