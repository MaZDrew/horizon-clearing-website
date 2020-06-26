import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenterRounded';
import ScheduleIcon from '@material-ui/icons/ScheduleRounded';
import AttachMoney from '@material-ui/icons/AttachMoneyRounded';
import Image from '../static/images/testimage1.jpg';
import Image2 from '../static/images/testimage2.png';
import Image3 from '../static/images/testimage3.jpg';

//, from finding the right aggregate materials to the optimal method to lay them down, we leave no stone unturned.
const useStyles = makeStyles((theme) => ({

  root: {
    postion: 'relative',
    marginBottom: 75
  },

  paper: {
    position: 'relative',
    marginTop: 75,
    height:650,
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
    marginTop: 20
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
            {<img className={classes.bgImage} src={Image2} alt={'hero'} />}
            <BusinessCenterIcon className={classes.icon}/>
            <Typography color={'secondary'} variant={'h3'} className={classes.headerText}>
              <b>Dedicated</b>
            </Typography>
            <Typography variant={'h5'} className={classes.infoText}>
              "If it's not done right, it's not worth doing at all." 
              Our founder is a firm believer in delivering reliable products that are built to last. 
              We work alongside industry professionals to ensure that your final product is up to grade.
            </Typography>
          </Paper>
        </Grid>

        <Grid item>
          <Paper variant={'outlined'} className={classes.paper}>
            {<img className={classes.bgImage} src={Image3} alt={'hero'} />}
            <ScheduleIcon className={classes.icon}/>
            <Typography color={'secondary'} variant={'h3'} className={classes.headerText}>
              <b>Efficient</b>
            </Typography>
            <Typography variant={'h5'} className={classes.infoText}>
              Both cost-effective and deadline-oriented; 
              At Horizon Clearing we approach each project with an economic mindset. 
              From start-to-finish, we ensure a great product at a competitive market price.
              We always find the right aggregate materials to the optimal method to lay them down
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item>
          <Paper variant={'outlined'} className={classes.paper}>
            {<img className={classes.bgImage} src={Image} alt={'hero'} />}
            <AttachMoney className={classes.icon}/>
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