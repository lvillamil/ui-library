import React from 'react';
import { render } from '@testing-library/react';
import Paginate from './Paginate';

const defaultProps = {
  items: [],
  rowsPerPageDefault: '',
  rowsPerPageOptions: [],
};

it('should render without crashing', () => {
  render(<Paginate {...defaultProps} />);
});
