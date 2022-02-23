import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './LoadingSpinner.scss';

const LoadingSpinner = ({ className }) => (
  <svg
    className={classNames('ui-library loading-spinner', className)}
    data-testid="loading-spinner"
    viewBox="0 0 100 100"
  >
    <circle
      className="loading-circle-path"
      cx="50"
      cy="50"
      r="30"
      stroke="url(#spinner-gradient)"
    />
    <linearGradient id="spinner-gradient">
      <stop offset="20%" stopOpacity="1" />
      <stop offset="50%" stopOpacity=".7" />
      <stop offset="70%" stopOpacity=".5" />
      <stop offset="100%" stopOpacity="0" />
    </linearGradient>
  </svg>
);

LoadingSpinner.propTypes = {
  className: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  className: '',
};

export default LoadingSpinner;
