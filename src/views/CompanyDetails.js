import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AttachMoney from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles((theme) => ({

  root: {
    postion: 'relative',
    marginBottom: 75
  },

  icon: {
    fontSize: 150,
    marginTop: 75,
    paddingLeft: 75
  },

  infoText: {
    textAlign: 'center',
    width: 300,
    marginTop: 20
  }
  
}));

export default function CompanyDetails(props) {

  const classes = useStyles();

  return (
    <div className={classes.root} id={'commercial'}>
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
        >
            <Grid item>
            <BusinessCenterIcon className={classes.icon}/>
            <Typography variant={'h3'} style={{textAlign: 'center'}}>
                <b>Dedicated.</b>
            </Typography>
            <Typography variant={'h5'} className={classes.infoText}>
                "If it's not done right, it's not worth doing at all." 
                Our founder is a firm believer in delivering reliable products that are built to last. 
                We work alongside industry professionals to ensure that your final product is up to grade.
            </Typography>
            </Grid>
            <Grid item>
            <AttachMoney className={classes.icon}/>
            <Typography variant={'h3'} style={{textAlign: 'center'}}>
                <b>Trusted.</b>
            </Typography>
            <Typography variant={'h5'} className={classes.infoText}>
                Quality service is our aim. 
                Since 2004, we've been at the forefront of all things sub-grade. 
                Be it: site preparation, land clearing, road building, or erosion control, we've provided products across Central Alberta that leave a lasting impression. 
                Repeat customers are our business. 
            </Typography>
            </Grid>
            <Grid item>
            <ScheduleIcon className={classes.icon}/>
            <Typography variant={'h3'} style={{textAlign: 'center'}}>
                <b>Efficient.</b>
            </Typography>
            <Typography variant={'h5'} className={classes.infoText}>
                Both cost-effective and deadline-oriented; 
                At Horizon Clearing we approach each project with an economic mindset. 
                From start-to-finish, we ensure a great product at a competitive market price, from finding the right aggregate materials to the optimal method to lay them down, we leave no stone unturned.
            </Typography>
            </Grid>
        </Grid>
    </div>
  )
}