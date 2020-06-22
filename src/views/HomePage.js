import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { AppBar, Button, ButtonGroup, Grid } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ScheduleIcon from '@material-ui/icons/Schedule';
import BuildIcon from '@material-ui/icons/Build';
import ImageFader from './ImageFader';
import ExpandMoreArrow from './ExpandMoreArrow';

const useStyles = makeStyles((theme) => ({
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
  icon: {
    fontSize: 150,
    marginTop: 125
  },
  heading: {
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    textAlign: 'center',
 
    [theme.breakpoints.down('sm')]: {
      fontSize: 50,
      margin: '0 40px 0px 40px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 60,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 80,
    },
  },

  textShadow: {
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
  },

  subheading: {
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    textAlign: 'center',
    fontSize: 22,

    [theme.breakpoints.down('xs')]: {
      margin: '140px 20px 0 20px'
    },
    [theme.breakpoints.up('sm')]: {
      margin: '50px 20px 0 20px'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 30
    },
  }
}));

export default function HomePage() {

  const classes = useStyles();

  return (
    <React.Fragment>

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography edge="start" variant="h6" className={classes.appBarHeading}>
            Horizon Clearing Inc.
          </Typography>
          <ButtonGroup variant="text" color="inherit" className={classes.appBarButtons}>
            <Button>Commercial</Button>
            <Button>Residential</Button>
            <Button>Contact Us</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>

      <Parallax pages={3}>

        <ParallaxLayer offset={0} speed={1}>
          <ImageFader/>
        </ParallaxLayer>

        <ParallaxLayer offset={0.85} speed={1}>
         <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography color={'secondary'} className={classes.textShadow}>
              <b>LEARN MORE</b>
            </Typography>
            <ExpandMoreArrow/>
          </Grid>
        </ParallaxLayer>
        
        <ParallaxLayer offset={0.2} speed={0.7}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Typography color={'secondary'} className={classes.heading}>
              <b>HORIZON CLEARING INC.</b>
            </Typography>

          </Grid>
        </ParallaxLayer>

        <ParallaxLayer offset={0.38} speed={0.6}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Typography color={'secondary'} className={classes.subheading}>
              <b>Serving Edmonton, Calgary, and the surrounding areas.</b>
            </Typography>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#6d6d6d' }}>
          
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={.8}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
          >
             <Grid item direction={'column'}>
              <BusinessCenterIcon className={classes.icon}/>
              <Typography variant={'h3'} align={'left'}>
                <b>test</b>
              </Typography>
              <Typography variant={'h5'}>
                test test test test 
              </Typography>
             </Grid>
             <Grid item direction={'column'}>
              <BuildIcon className={classes.icon}/>
              <Typography>
                <b>test</b>
              </Typography>
             </Grid>
             <Grid item direction={'column'}>
              <ScheduleIcon className={classes.icon}/>
              <Typography variant={'h5'}>
                <b>test</b>
              </Typography>
             </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#888888' }} >
        
        </ParallaxLayer>

        <ParallaxLayer offset={2.125} speed={.8}>
          <img src={'https://media.discordapp.net/attachments/708049485665927208/720468050272452699/20150926_174452.jpg'} className={classes.picture}/>
        </ParallaxLayer>

      </Parallax>
    </React.Fragment>
  )
}