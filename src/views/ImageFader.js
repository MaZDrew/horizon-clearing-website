import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';

const slides = [
  { id: 0, url: 'https://media.discordapp.net/attachments/708049485665927208/720466918837846076/IMG_1598.JPG' },
  { id: 1, url: 'https://media.discordapp.net/attachments/708049485665927208/722874775889772684/013.JPG' },
  { id: 2, url: 'https://media.discordapp.net/attachments/708049485665927208/722874916348755988/069.JPG' },
  { id: 3, url: 'https://cdn.discordapp.com/attachments/708049485665927208/722874926218084483/226.JPG' },
]

const useStyles = makeStyles((theme) => ({
    bg: {
      position: 'absolute',
      width: '100vw',
      height: 'calc(100vh - 65px)',
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