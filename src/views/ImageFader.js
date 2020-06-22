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
      width: '100vw',
      height: '100vh',
      top: '65px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      willChange: 'opacity'
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

  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 6000), [])
  
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className={classes.bg}
      style={{ ...props, backgroundImage: `url(${item.url})` }}
    />
  ))
}

export default ImageFader;