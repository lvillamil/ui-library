import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './LoadingOverlay.scss';

const LoadingOverlay = ({ loading, fullSize, isModalOverlay, ...rest }) =>
  loading && (
    <div
      className={classNames('ui-library loading-overlay-container flex-fill', {
        'full-size': fullSize,
        'modal-overlay': isModalOverlay,
      })}
      data-testid="loading-overlay"
      {...rest}
    >
      <LoadingSpinner />
    </div>
  );

LoadingOverlay.propTypes = {
  loading: PropTypes.bool,
  fullSize: PropTypes.bool,
  isModalOverlay: PropTypes.bool,
};

LoadingOverlay.defaultProps = {
  loading: false,
  fullSize: false,
  isModalOverlay: false,
};

export default LoadingOverlay;
