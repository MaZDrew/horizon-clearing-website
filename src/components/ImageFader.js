import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';

import Image1 from '../static/images/image1.jpg';
import Image2 from '../static/images/image2.jpg';
import Image3 from '../static/images/clearing.png';
import Image4 from '../static/images/image4.jpg';

const slides = [
  { id: 0, url: Image4 },
  { id: 1, url: Image3 },
  { id: 2, url: Image2 },
  { id: 3, url: Image1 },
]

const useStyles = makeStyles((theme) => ({
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
      style={{ ...props, backgroundImage: `url(${item.url})` }}
    >
      <img src={item.url} className={classes.bg} alt={'horizon clearing'}/>
    </animated.div>
  ))
}

export default ImageFader;