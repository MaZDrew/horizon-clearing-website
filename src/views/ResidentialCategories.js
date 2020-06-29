import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import WallsImage from '../static/images/walls.png';
import ConcreteImage from '../static/images/concrete.png';
import AcreageImage from '../static/images/acreage.png';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      margin: `${theme.spacing(8)}px 0px ${theme.spacing(8)}px 0px !important`,
    },
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    }
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 36,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 18px)',
    transition: theme.transitions.create('opacity'),
  }
}));

function ResidentialCategories(props) {
  const classes = useStyles();

  const images = [
    {
      url: WallsImage,
      title: 'Walls',
      width: '30%',
    },
    {
      url: AcreageImage,
      title: 'Acreage Development',
      width: '40%',
    },
    {
      url: ConcreteImage,
      title: 'Concrete',
      width: '30%',
    }
  ];

  return (
    <div id={'residential'} className={classes.root}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        <b>Residential</b>
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </div>
  );
}

export default ResidentialCategories;
