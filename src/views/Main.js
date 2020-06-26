import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, ButtonGroup, Fab } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import HomePage from './HomePage';
import CompanyHero from './CompanyHero';
import CompanyDetails from './CompanyDetails';
import { HideOnScroll, ShowOnScroll } from '../utils/scrollingUtils';
import CommercialCategories from './CommercialCategories';
import ResidentialCategories from './ResidentialCategories';
import ContactUs from './ContactUs';

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

  fabScrollToTop: {
    position: 'fixed',
    right: 15,
    bottom: 15,
    zIndex: 3
  }
}));

export default function Main(props) {

  const classes = useStyles()

  React.useEffect(() => {
    scrollToHashElement();
  }, []);
  
  const setHash = (hash) => {
    window.history.pushState(null, null, `#${hash}`);
    scrollToHashElement();
  }

  const scrollToHashElement = () => {

    const hash = window.location.hash;
    const element = document.getElementById(hash.replace("#", ""));

    if(element) {
      setTimeout(() => {
        window.scrollTo({
          behavior: element ? "smooth" : "auto",
          top: element ? element.offsetTop : 0
        });
      }, 0);
    } else {
      scrollToTop()
    }
  }

  const scrollToTop = () => {
    window.history.pushState(null, null, '#');
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  }

  const scrollDownPageLength = () => {
    window.scrollTo({
      behavior: "smooth",
      top: window.innerHeight
    });
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
              <Button onClick={() => setHash('commercial')}>Commercial</Button>
              <Button onClick={() => setHash('residential')}>Residential</Button>
              <Button onClick={() => setHash('contactus')}>Contact Us</Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <HomePage scrollDown={scrollDownPageLength}/>
      
      <CompanyDetails />

      <CommercialCategories />

      <CompanyHero />

      <ResidentialCategories />

      <ContactUs />
      
      <ShowOnScroll threshold={100}>
        <Fab onClick={() => scrollToTop()} size="medium" color="primary" className={classes.fabScrollToTop}>
          <ExpandLess />
        </Fab>
      </ShowOnScroll>

    </div>
  )
}