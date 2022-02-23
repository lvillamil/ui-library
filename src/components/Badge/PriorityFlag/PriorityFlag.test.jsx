import React from 'react';
import { render } from '@testing-library/react';
import PriorityFlag from './PriorityFlag';

describe('PriorityFlag', () => {
  it('should render without crashing', () => {
    render(<PriorityFlag priority="urgent" />);
  });
});
