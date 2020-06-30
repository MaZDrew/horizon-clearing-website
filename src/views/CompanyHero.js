import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Image from '../static/images/image3.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(8)}px`,
    [theme.breakpoints.down('md')]: {
      margin: `0px 0px ${theme.spacing(4)}px 0px !important`,
    },
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  },
  bgImage: {  
    width: '30%',
    display: 'block',
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
      height: '100% !important',
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: '600px',
      maxHeight: '630px',
    }
  },
  headerText: {
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    textAlign: 'center',
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      fontSize: 28,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 54,
    }
  },
  textParent: {
    padding: theme.spacing(3),
    display: 'block',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  },
  overlay: {
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,.3)',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  },
  infoText: {
    textAlign: 'center',
    color: 'white',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      maxHeight: '240px',
      overflow: 'auto'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 31,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 22,
      color: 'black',
      textShadow: 'none'
    }
  }
}));

export default function CompanyHero() {

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <img className={classes.bgImage} src={Image} alt={'hero'} />
      <div className={classes.overlay} />
      <div className={classes.textParent}>
        <Typography className={classes.headerText} component="h1" variant="h3" color="secondary" gutterBottom>
          <b>ABOUT US</b>
        </Typography>
        <Typography className={classes.infoText} variant="h5" color="inherit" paragraph>
          In 2004, Myles Zuk started Horizon Clearing Inc. as a small scale one man enterprise, focused on land clearing. 
          The first few years were tumultuous with the onset of the 2008 recession, but Horizon was able to brave through its growing pains, and continues to make strides across central Alberta.
          With nothing but a skid steer and a timberaxe, the small scale enterprise started in 2004 has grown and expanded into the company we know today. With new machinery, tools, and knowledge 
          gained over the last 16 years, Horizon is constantly entering into new forrays - while keeping our signature stamp of quality. 
          Whether you need a retaining wall for your home garden, or a boat launch on the North Saskatchewan River, Horizon Clearing can handle it all. 
        </Typography>
      </div>
    </Paper>     
  );
}