import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { AppBar, Button, ButtonGroup, Grid, Box, Card, GridList } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ScheduleIcon from '@material-ui/icons/Schedule';
import BuildIcon from '@material-ui/icons/Build';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

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
            Horizon Clearing Inc.
          </Typography>
          <ButtonGroup edge="end" variant="text" color="inherit">
            <Button>Commercial</Button>
            <Button>Residential</Button>
            <Button>Contact Us</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>

      <Parallax pages={3}>

        <ParallaxLayer offset={0.05} speed={1}>
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
              <b>HORIZON CLEARING INC.</b>
            </Typography>

          </Grid>
        </ParallaxLayer>

        <ParallaxLayer offset={0.32} speed={0.6}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Typography variant={'h5'} color={'secondary'} classname={classes.textShadow}>
              <b>Serving Edmonton, Calgary, and the surrounding areas.</b>
            </Typography>
          
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer offset={0.9999} speed={0.2}>
          <GridList>
            <Grid
              container
              direction="row"
              justify="left"
              alignItems="center"
            >
              <Card className={classes.root}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Placeholder card
                  </Typography>
                  <Typography variant="h5" component="h2">
                    The idea is that a picture will be here and text will be to the right
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    adjective
                  </Typography>
                  <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid
              container
              direction="column"
              justify="center"
              alighItems="center"
            >
              <Typography>
                <b>Est 2004.</b>
              </Typography>
              <Typography display='block'>
                <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi justo, accumsan vitae neque vel, mattis congue dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur blandit finibus mauris, id consectetur urna gravida eu. Curabitur condimentum vel leo ut laoreet. Nunc mattis vestibulum elementum. Proin elementum, ligula at viverra condimentum, mauris leo faucibus neque, malesuada vestibulum tellus sapien sed neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin posuere tellus in turpis eleifend, nec accumsan elit semper. Vestibulum malesuada justo vel metus convallis, ac efficitur nisl volutpat. Curabitur et magna vel sem blandit commodo non in magna. Nulla libero justo, euismod non tortor et, ornare laoreet odio. Duis egestas tristique euismod. Donec ornare orci est, vel venenatis nulla pharetra vitae. Nunc quis tempor enim.</b>
              </Typography>
            </Grid>
          </GridList>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#6d6d6d' }}>
        <Grid
          container
          direction="row"
          justify="left"
          alignItems="left"
        >
          <Box>
            <Typography>
              <b>test eh</b>
            </Typography>
          </Box>
          <Grid
            container
            direction="column"
            justify="right"
            alighItems="right"
          >
            <Typography>
              <b>Est 2004.</b>
            </Typography>
            <Typography display='block'>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi justo, accumsan vitae neque vel, mattis congue dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur blandit finibus mauris, id consectetur urna gravida eu. Curabitur condimentum vel leo ut laoreet. Nunc mattis vestibulum elementum. Proin elementum, ligula at viverra condimentum, mauris leo faucibus neque, malesuada vestibulum tellus sapien sed neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin posuere tellus in turpis eleifend, nec accumsan elit semper. Vestibulum malesuada justo vel metus convallis, ac efficitur nisl volutpat. Curabitur et magna vel sem blandit commodo non in magna. Nulla libero justo, euismod non tortor et, ornare laoreet odio. Duis egestas tristique euismod. Donec ornare orci est, vel venenatis nulla pharetra vitae. Nunc quis tempor enim.</b>
            </Typography>
          </Grid>
        </Grid>
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
          <img src={'https://media.discordapp.net/attachments/708049485665927208/720468050272452699/20150926_174452.jpg'} className={classes.whosthatsexyman}/>
        </ParallaxLayer>

      </Parallax>
    </React.Fragment>
  )
}