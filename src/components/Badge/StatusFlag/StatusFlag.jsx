// Generated with util/create-component.js
import React from 'react';
import PropTypes from 'prop-types';
import ReactBootstrapBadge from 'react-bootstrap/Badge';
import kebabCase from 'lodash/kebabCase';

const StatusFlag = ({ status, type, className }) => (
  <ReactBootstrapBadge
    variant={`${type}-${kebabCase(status)}`}
    className={`ui-library ${className}`}
  >
    {status}
  </ReactBootstrapBadge>
);

StatusFlag.propTypes = {
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

StatusFlag.defaultProps = {
  className: '',
};

export default StatusFlag;
