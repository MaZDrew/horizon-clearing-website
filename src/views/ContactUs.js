import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Typography } from '@material-ui/core';

function Copyright() {
  return (
    <React.Fragment>
      <Typography variant={'h6'} style={{marginTop:110}}>
        {'© '}
        <Link color="inherit" href="https://horizon-clearing.web.app">
          Horizon Clearing Inc.
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'relative',
    width: '100%',
    height: 250,
    backgroundColor: theme.palette.primary.light,
  }
}));

export default function ContactUs() {

  const classes = useStyles();

  return (
    <div id={'contactus'} className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Copyright />
      </Grid>
    </div>
  );
}