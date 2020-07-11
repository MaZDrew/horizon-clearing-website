import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Typography, Container } from '@material-ui/core';
import i18n from '../utils/i18n';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'relative',
    width: '100%',
    backgroundColor: theme.palette.primary,
  },
  contact: {
    margin: theme.spacing(2)
  },
  copyright: {
    margin: theme.spacing(2),
    textAlign: 'center'
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    }
  }
}));

export default function ContactUs() {

  const classes = useStyles();

  const footers = [
    {
      title: i18n.string('contact_us_title1'),
      description: [i18n.string('contact_us_email'), i18n.string('contact_us_tel'), i18n.string('contact_us_tollfree')],
    },
    {
      title: i18n.string('contact_us_title2'),
      description: [i18n.string('contact_us_address'), i18n.string('contact_us_region'), i18n.string('contact_us_area_code')],
    },
  ];

  return (
    <div id={'contactus'} className={classes.root}>

      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container justify="space-evenly" alignItems="flex-start">
          {footers.map((footer) => (
            <Grid item key={footer.title}>

              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
            
              {footer.description.map((item, index) => (
                <Typography key={`description${index}`} variant="subtitle1" color="primary">
                  {item}
                </Typography>
              ))}
        
            </Grid>
          ))}
        </Grid>
      </Container>
      
      <Typography variant={'body2'} className={classes.copyright}>
        {'© '}
        <Link color="inherit" href="https://horizon-clearing.web.app">
          {i18n.string('app_bar_heading')}
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>

    </div>
  );
}