import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { AppBar, Button, ButtonGroup, Grid } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ScheduleIcon from '@material-ui/icons/Schedule';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles((theme) => ({
  cloud: {
    display: 'block',
    height: '100%',
    width: '100%'
  },
  whosthatsexyman: {
    display: 'block',
    height: '50%',
    width: '50%',
    marginLeft:'5%'
  },
  textShadow: {
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
  },
  flex: {
    flex: 1
  },
  icon: {
    fontSize: 150,
    marginTop: 125
  }
}));

export default function HomePage() {

  const classes = useStyles();

  return (
    <React.Fragment>

      <AppBar position="fixed">
        <Toolbar>
          <Typography edge="start" variant="h6" className={classes.flex}>
            Horizon Clearing
          </Typography>
          <ButtonGroup edge="end" variant="text" color="inherit">
            <Button>Commercial</Button>
            <Button>Residential</Button>
            <Button>Contact Us</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>

      <Parallax pages={3}>

        <ParallaxLayer offset={0.05} speed={0.3}>
          <img src={'https://media.discordapp.net/attachments/708049485665927208/720466918837846076/IMG_1598.JPG'} className={classes.cloud}>
          </img>
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.7}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Typography variant={'h1'} color={'secondary'} className={classes.textShadow}>
              <b>HORIZON CLEARING</b>
            </Typography>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#888888' }}>
        
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
              <Typography variant={'h5'}>
                
              </Typography>
             </Grid>
             <Grid item direction={'column'}>
              <BuildIcon className={classes.icon}/>
              <Typography>
                
              </Typography>
             </Grid>
             <Grid item direction={'column'}>
              <ScheduleIcon className={classes.icon}/>
              <Typography variant={'h5'}>
                
              </Typography>
             </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#888888' }} >

        </ParallaxLayer>

        <ParallaxLayer offset={2.125} speed={.8}>
          <img src={'https://media.discordapp.net/attachments/708049485665927208/720468050272452699/20150926_174452.jpg'} className={classes.whosthatsexyman}/>
        </ParallaxLayer>

      </Parallax>
    </React.Fragment>
  )
}