import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Image from '../static/images/image5.jpg';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '90vh',
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(8)
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  textShadow: {
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
  }
}));

export default function CompanyHero() {

  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${Image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={Image} alt={'hero'} />}
      <div className={classes.overlay}/>
      <Grid container>
        <Grid item md={8}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography className={classes.textShadow} component="h1" variant="h3" color="inherit" gutterBottom>
              ABOUT US
            </Typography>
            <Typography variant="h6" color="secondary" paragraph>
              
              In 2004, Myles Zuk started Horizon Clearing Inc. as a small scale one man enterprise, focused on land clearing. 
              The first few years were tumultuous with the onset of the 2008 recession, but Horizon was able to brave through it's growing pains, and continues to make strides across central Alberta.
              With nothing but a skid steer and a timberaxe, the small scale enterprise started in 2004 has grown and expanded into the company we know today. With new machinery, tools, and knowledge 
              gained over the last 16 years, Horizon is constantly entering into new forrays - while keeping our signature stamp of quality. 
              Whether you need a retaining wall for your home garden, or a boat launch on the North Saskatchewan River, Horizon Clearing can handle it all. 


            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}