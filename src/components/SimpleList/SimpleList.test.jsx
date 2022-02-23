import React from 'react';
import { render } from '@testing-library/react';
import SimpleList from './SimpleList';

const defaultProps = {
  data: [],
  renderItem: jest.fn(),
  className: '',
  showPagination: false,
};

it('should render without crashing', () => {
  render(<SimpleList {...defaultProps} />);
});
