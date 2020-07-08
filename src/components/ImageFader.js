import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';

const slides = [
  { id: 0, url: 'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/fader-image4.jpg?alt=media&token=35bf2aca-aa7e-4f7c-8787-dda1721f0594' },
  { id: 1, url: 'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/fader-image2.jpg?alt=media&token=e5d0bfbf-fc54-42f5-9f1d-c983d1726197' },
  { id: 2, url: 'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/clearing.png?alt=media&token=abd88bda-c0c2-493f-a330-4796ae234fd1' },
  { id: 3, url: 'https://firebasestorage.googleapis.com/v0/b/horizon-clearing.appspot.com/o/fader-image4.jpg?alt=media&token=35bf2aca-aa7e-4f7c-8787-dda1721f0594' },
]

const useStyles = makeStyles((theme) => ({
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    willChange: 'opacity',
    zIndex: -2
  }
}));

const ImageFader = () => {

  const [index, set] = useState(0);
  const classes = useStyles();

  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  useEffect(() => {

    let transitionInterval;

    function updateImage() {
      set(state => (state + 1) % 4)
    }

    function setTransitionInterval() {
      transitionInterval = setInterval(updateImage, 6000);
    }

    function clearTransitionInterval() {
      if(transitionInterval) clearTimeout(transitionInterval)
    }

    window.addEventListener('focus', setTransitionInterval);
    window.addEventListener('blur', clearTransitionInterval);

    return () => {
      window.removeEventListener('focus', setTransitionInterval);
      window.removeEventListener('blur', clearTransitionInterval);
    };

  }, [])
  
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className={classes.bg}
      style={{ 
        ...props,
        backgroundImage: `url(${item.url})`,
      }}
    />
  ))
}

export default ImageFader;