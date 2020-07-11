import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenterOutlined';
import ScheduleIcon from '@material-ui/icons/ScheduleOutlined';
import HowToRegIcon from '@material-ui/icons/HowToRegOutlined';
import i18n from '../utils/i18n';

const useStyles = makeStyles((theme) => ({

  root: {
    postion: 'relative',
    marginBottom: theme.spacing(4)
  },

  paper: {
    position: 'relative',
    marginTop: theme.spacing(4),
    height: 650,
    zIndex: 0
  },

  icon: {
    fontSize: 150,
    paddingLeft: 135,
    marginTop: 20,
  },

  headerText: {
    textAlign: 'center',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
  },

  infoText: {
    padding:theme.spacing(2),
    margin: theme.spacing(3),
    textAlign: 'center',
    width: 325,
    marginTop: 40
  },

  bgImage: {
    position: 'absolute',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 250,
    opacity: 0.5,
    zIndex: -1
  }
}));

export default function CompanyDetails(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid item>
          <Paper variant={'outlined'} className={classes.paper}>
            {<img className={classes.bgImage} src={'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/dedicated.png?alt=media&token=facb68b0-216a-4fdf-af40-c6cec05c210d'} alt={'hero'} />}
            <BusinessCenterIcon className={classes.icon}/>
            <Typography color={'secondary'} variant={'h3'} className={classes.headerText}>
              {i18n.string('company_details_title1')}
            </Typography>
            <Typography variant={'h5'} className={classes.infoText}>
              {i18n.string('company_details_description1')}
            </Typography>
          </Paper>
        </Grid>

        <Grid item>
          <Paper variant={'outlined'} className={classes.paper}>
            {<img className={classes.bgImage} src={'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/efficient.jpg?alt=media&token=0f1ead68-c983-46fc-9db3-68d7d41f2770'} alt={'hero'} />}
            <ScheduleIcon className={classes.icon}/>
            <Typography color={'secondary'} variant={'h3'} className={classes.headerText}>
              {i18n.string('company_details_title3')}
            </Typography>
            <Typography variant={'h5'} className={classes.infoText}>
              {i18n.string('company_details_description3')}
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item>
          <Paper variant={'outlined'} className={classes.paper}>
            {<img className={classes.bgImage} src={'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/trusted.png?alt=media&token=26578b7e-aec0-4cee-a755-2bd1928c157a'} alt={'hero'} />}
            <HowToRegIcon className={classes.icon}/>
            <Typography color={'secondary'} variant={'h3'} className={classes.headerText}>
              {i18n.string('company_details_title2')}
            </Typography>
            <Typography variant={'h5'} className={classes.infoText}>
              {i18n.string('company_details_description2')}
            </Typography>
          </Paper>
        </Grid>

      </Grid>
    </div>
  )
}