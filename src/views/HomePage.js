import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ImageFader from '../components/ImageFader';
import ExpandMoreArrow from '../components/ExpandMoreArrow';
import i18n from '../utils/i18n';
import { scrollDownPageLength } from '../utils/scrollingUtil';

const useStyles = makeStyles((theme) => ({

  root: {
    position: 'relative',
    height: '100vh !important'
  },

  heading: {
    width: '80vw',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    textAlign: 'center',
 
    [theme.breakpoints.down('sm')]: {
      fontSize: 50,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 60,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 80,
    },
  },

  subheading: {
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    textAlign: 'center',
    fontSize: 22,

    [theme.breakpoints.down('xs')]: {
      marginTop: 80
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 50
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 30
    },
  },

  text: {
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    fontSize: 20
  },

  main: {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -35%)'
  },

  learnMore: {
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: 'translate(-50%, -90%)'
  }
}));

export default function HomePage(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ImageFader />

      <div className={classes.main}>
        <Typography color={'secondary'} className={classes.heading}>
          <b>{i18n.string('app_heading')}</b>
        </Typography>
        <Typography color={'secondary'} className={classes.subheading}>
          <b>{i18n.string('app_subheading')}</b>
        </Typography>
      </div>

      <div className={classes.learnMore}>
        <Grid container direction={'column'} justify={'center'} alignItems={'center'}>
          <Button variant='outlined' onClick={() => scrollDownPageLength()} color="secondary" className={classes.text}>
            <b>Learn More</b>
          </Button>
          <ExpandMoreArrow/>
        </Grid>
      </div>

    </div>
  )
}