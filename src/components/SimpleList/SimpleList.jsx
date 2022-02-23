import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Paginate from 'components/Paginate/Paginate';

const SimpleList = (props) => {
  const { data, renderItem, className, showPagination } = props;
  const items = data.map((value, index) => renderItem(value, index));
  return showPagination ? (
    <Paginate
      items={items}
      rowsPerPageOptions={[2, 4, 6, 10]}
      rowsPerPageDefault={10}
    />
  ) : (
    <div className={classNames('simple-list', className)}>{items}</div>
  );
};

SimpleList.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  data: PropTypes.oneOfType([PropTypes.array]).isRequired,
  renderItem: PropTypes.func.isRequired,
  showPagination: PropTypes.bool,
};

SimpleList.defaultProps = {
  className: null,
  showPagination: false,
};

export default SimpleList;
