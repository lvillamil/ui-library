import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as KeyboardArrowUp } from 'icons/keyboard_arrow_up.svg';
import { ReactComponent as KeyboardArrowDown } from 'icons/keyboard_arrow_down.svg';
import { ReactComponent as KeyboardArrowRight } from 'icons/keyboard_arrow_right.svg';
import { ReactComponent as KeyboardArrowLeft } from 'icons/keyboard_arrow_left.svg';

const Arrow = ({ position, ...rest }) => {
  switch (position) {
    case 'up':
      return <KeyboardArrowUp {...rest} />;
    case 'down':
      return <KeyboardArrowDown {...rest} />;
    case 'left':
      return <KeyboardArrowLeft {...rest} />;
    case 'right':
      return <KeyboardArrowRight {...rest} />;
    default:
      return null;
  }
};

Arrow.propTypes = {
  position: PropTypes.string.isRequired,
};

export default Arrow;
