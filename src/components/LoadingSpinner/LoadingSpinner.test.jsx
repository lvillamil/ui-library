import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

it('should render without crashing', () => {
  render(<LoadingSpinner />);
});
