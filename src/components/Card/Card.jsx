import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Card.scss';

const Card = (props) => {
  const {
    className,
    titleSectionClassName,
    titleClassName,
    contentClassName,
    title,
    titleActions,
    children,
  } = props;
  return (
    <div className={classNames('card', className)}>
      <div
        className={classNames('title-section d-flex', titleSectionClassName)}
      >
        <div className={classNames('title', titleClassName)}>{title}</div>
        {titleActions && titleActions}
      </div>
      <div className={classNames('content', contentClassName)}>{children}</div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  titleSectionClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  titleClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  title: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.string,
  ]),
  titleActions: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.string,
  ]),
  contentClassName: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.string,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

Card.defaultProps = {
  className: null,
  titleSectionClassName: null,
  titleClassName: 'justify-content-between',
  contentClassName: null,
  title: null,
  titleActions: null,
};

export default Card;
