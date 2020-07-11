import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import i18n from '../utils/i18n';

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
      <img className={classes.bgImage} src={'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/fader-image3.jpg?alt=media&token=387017a9-804d-4e00-a01c-9d861b74a3d9'} alt={'hero'} />
      <div className={classes.overlay} />
      <div className={classes.textParent}>
        <Typography className={classes.headerText} component="h1" variant="h3" color="secondary" gutterBottom>
          <b>{i18n.string('hero_about_us')}</b>
        </Typography>
        <Typography className={classes.infoText} variant="h5" color="inherit" paragraph>
          {i18n.string('hero_description')}
        </Typography>
      </div>
    </Paper>     
  );
}