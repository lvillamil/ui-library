// Generated with util/create-component.js
import React from 'react';
import PropTypes from 'prop-types';
import ReactBootstrapBadge from 'react-bootstrap/Badge';
import kebabCase from 'lodash/kebabCase';

const PriorityFlag = ({ priority }) => (
  <ReactBootstrapBadge
    variant={`priority-${kebabCase(priority)}`}
    className="ui-library text-uppercase is-priority"
  >
    {priority}
  </ReactBootstrapBadge>
);

PriorityFlag.propTypes = {
  priority: PropTypes.string.isRequired,
};

export default PriorityFlag;
