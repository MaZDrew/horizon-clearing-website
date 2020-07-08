import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenterOutlined';
import ScheduleIcon from '@material-ui/icons/ScheduleOutlined';
import HowToRegIcon from '@material-ui/icons/HowToRegOutlined';

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
              <b>Dedicated</b>
            </Typography>
            <Typography variant={'h5'} className={classes.infoText}>
              "If it's not done right, it's not worth doing at all."
              Our founder is a firm believer in delivering reliable products that are built to last.  
              We train our team to uphold this standard, and work alongside industry professionals to ensure that your final product is up to grade.
            </Typography>
          </Paper>
        </Grid>

        <Grid item>
          <Paper variant={'outlined'} className={classes.paper}>
            {<img className={classes.bgImage} src={'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/efficient.jpg?alt=media&token=0f1ead68-c983-46fc-9db3-68d7d41f2770'} alt={'hero'} />}
            <ScheduleIcon className={classes.icon}/>
            <Typography color={'secondary'} variant={'h3'} className={classes.headerText}>
              <b>Efficient</b>
            </Typography>
            <Typography variant={'h5'} className={classes.infoText}>
              Both cost-effective and deadline-oriented; 
              At Horizon Clearing we approach each project with an economic mindset. 
              From finding the right aggregate materials, to laying them down - 
              start to finish, we ensure a great product at a competitive market price.
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item>
          <Paper variant={'outlined'} className={classes.paper}>
            {<img className={classes.bgImage} src={'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/trusted.png?alt=media&token=26578b7e-aec0-4cee-a755-2bd1928c157a'} alt={'hero'} />}
            <HowToRegIcon className={classes.icon}/>
            <Typography color={'secondary'} variant={'h3'} className={classes.headerText}>
              <b>Trusted</b>
            </Typography>
            <Typography variant={'h5'} className={classes.infoText}>
              Quality service is our aim. 
              Since 2004, we've been at the forefront of all things sub-grade. 
              Be it: site preparation, land clearing, road building, or erosion control, we've provided products across Central Alberta that leave a lasting impression. 
              Repeat customers are our business. 
            </Typography>
          </Paper>
        </Grid>

      </Grid>
    </div>
  )
}