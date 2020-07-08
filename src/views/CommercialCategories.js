import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import PictureModal from '../components/PictureModal';

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

function CommercialCategories(props) {

  const classes = useStyles();

  const [modal, setModal] = useState({
    open: false, 
    title: '',
    imageUrl: ''
  })

  const images = [
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/sitepreparation.jpg?alt=media&token=3bb748f3-b27f-4ec9-8492-2b80845bcc3c',
      title: 'Site Preparation',
      width: '40%',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/landclearing.png?alt=media&token=c1f90561-21e4-4b5b-bd81-0275be624027',
      title: 'Land Clearing',
      width: '20%',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/roadbuilding.jpg?alt=media&token=f56633d5-1767-4027-bf02-5d5e09e38ba7',
      title: 'Road Building',
      width: '40%',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/culvert.jpg?alt=media&token=8a0371e2-8ae3-4eb4-b6a9-2e06acfec680',
      title: 'Culverts and Sloping',
      width: '38%',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/pathway.png?alt=media&token=e6c7ee2a-3bb0-4f54-9495-ff7ab94a7aca',
      title: 'Driveways / Pathways',
      width: '38%',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/erosion.png?alt=media&token=77b29baf-9517-4237-9fb1-bfe4e906c7eb',
      title: 'Water / Erosion',
      width: '24%',
    }
  ];

  const openModal = (title, imageUrl) => {
    setModal({open:true, title, imageUrl})
  }

  const closeModal = () => {
    setModal({...modal, open:false})
  }

  return (
    <div id={'commercial'} className={classes.root}>
      <PictureModal open={modal.open} title={modal.title} imageUrl={modal.imageUrl} handleClose={closeModal}/>
      <Typography variant="h4" marked="center" align="center" component="h2">
        <b>Commercial</b>
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            onClick={() => openModal(image.title, image.url)}
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

export default CommercialCategories;
