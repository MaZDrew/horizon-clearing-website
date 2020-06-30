import React from 'react';
import { animated, useSpring } from 'react-spring';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//TODO: add a way to remove memory leak when not in focus

const AnimatedIcon = animated(ExpandMoreIcon);

const ExpandMoreArrow = () => {

  const props = useSpring({
    from: { transform: `translate3d(0,10px,0)` },
    to: async next => {
      while (1) {
        await next({ transform: `translate3d(0,0,0)` })
        await next({ transform: `translate3d(0,10px,0)` })
      }
    },
  });
  
  return (
    <AnimatedIcon style={{...props, fontSize: 60}} color={'secondary'}/>
  );
}

export default ExpandMoreArrow;