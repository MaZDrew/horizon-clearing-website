import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import PictureModal from '../components/PictureModal';
import i18n from '../utils/i18n';

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

  const [modal, setModal] = useState({
    open: false, 
    title: '',
    imageUrl: '',
    descriptions: []
  })

  const images = [
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/walls.png?alt=media&token=9093ce28-44be-44cf-a8ef-bfdb43da49ff',
      descriptions: [
        i18n.string('walls_description1'),
      ],
      title: i18n.string('walls_title'),
      width: '30%',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/acreage.png?alt=media&token=a7c01013-cf0c-49e3-80e3-8b89d46cbee4',
      descriptions: [
        i18n.string('acreage_description1'),
        i18n.string('acreage_description2'),
        i18n.string('acreage_description3'),
        i18n.string('acreage_description4'),
        i18n.string('acreage_description5'),
      ],
      title: i18n.string('acreage_title'),
      width: '40%',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/concrete.png?alt=media&token=39457778-edf3-41d3-bc2e-1d101d37e75b',
      descriptions: [
        i18n.string('concrete_description1'),
        i18n.string('concrete_description2'),
        i18n.string('concrete_description3'),
      ],
      title: i18n.string('concrete_title'),
      width: '30%',
    }
  ];

  const openModal = (title, imageUrl, descriptions) => {
    setModal({open:true, title, imageUrl, descriptions})
  }

  const closeModal = () => {
    setModal({...modal, open:false})
  }

  return (
    <div id={'residential'} className={classes.root}>
      <PictureModal open={modal.open} title={modal.title} imageUrl={modal.imageUrl} handleClose={closeModal} descriptions={modal.descriptions}/>
      <Typography variant="h4" marked="center" align="center" component="h2">
        <b>{i18n.string('residential_categories_title')}</b>
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            onClick={() => openModal(image.title, image.url, image.descriptions)}
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