import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'relative',
    width: '100%',
    backgroundColor: theme.palette.primary.light,
  },
  contact: {
    margin: theme.spacing(2)
  },
  textfield: {

  },
  copyright: {
    margin: theme.spacing(2)
  },
  footer: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    }
  },
}));

const footers = [
  {
    title: 'Contact Us',
    description: ['Email: horizonclearing@gmail.com', 'Tel: 403-369-5500', 'Toll free:  1-888-369-5501'],
  },
  {
    title: 'Head office',
    description: ['51108 Range Road 242A', 'Leduc County, Alberta', 'T4X 0N3'],
  },
];

export default function ContactUs() {

  const classes = useStyles();

  return (
    <div id={'contactus'} className={classes.root}>

      <Container maxWidth="md" component="footer" className={classes.footer}>

        <Grid container justify="space-evenly" alignItems="flex-start">
          
          {footers.map((footer) => (
            <Grid item key={footer.title}>

              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
            
              {footer.description.map((item) => (
                <Typography variant="subtitle1" color="textSecondary">
                  {item}
                </Typography>
              ))}
        
            </Grid>
          ))}

        </Grid>

      </Container>
      
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Typography variant={'body2'} className={classes.copyright}>
          {'© '}
          <Link color="inherit" href="https://horizon-clearing.web.app">
            Horizon Clearing Inc.
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Grid>

    </div>
  );
}