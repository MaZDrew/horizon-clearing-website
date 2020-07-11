import React from 'react';
import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@material-ui/core';
import { HideOnScroll, setHash } from '../utils/scrollingUtil';
import { withStyles } from '@material-ui/core/styles';
import i18n from '../utils/i18n';

const styles = (theme) => ({
  appBar: {
    minHeight: '65px !important'
  },
  appBarHeading: {
    [theme.breakpoints.up('sm')]: {
      flex: 1,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  appBarButtons: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      margin: 'auto',
      paddingTop: 7
    }
  }
});

function CustomAppBar(props) {

  const { classes } = props;

  return (
    <HideOnScroll threshold={100}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography edge="start" variant="h6" className={classes.appBarHeading}>
            {i18n.string('app_bar_heading')}
          </Typography>
          <ButtonGroup variant="text" color="inherit" className={classes.appBarButtons}>
            <Button onClick={() => setHash('commercial')}>{i18n.string('commercial_button')}</Button>
            <Button onClick={() => setHash('residential')}>{i18n.string('residential_button')}</Button>
            <Button onClick={() => setHash('contactus')}>{i18n.string('contact_us_button')}</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default withStyles(styles)(CustomAppBar);