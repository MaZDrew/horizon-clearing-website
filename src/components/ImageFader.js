import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';

import Image1 from '../static/images/image1.jpg';
import Image2 from '../static/images/image2.jpg';
import Image3 from '../static/images/image3.jpg';
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

  const [inFocus, setInFocus] = useState(true);

  useEffect(() => {

    window.addEventListener('focus', () => setInFocus(true));
    window.addEventListener('blur', () => setInFocus(false));

    void setInterval(() => {
      if(inFocus) set(state => (state + 1) % 4)
    }, 6000);

    return () => {
      window.removeEventListener('focus', () => setInFocus(true));
      window.removeEventListener('blur', () => setInFocus(false));
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