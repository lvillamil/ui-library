// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';
import LoadingOverlay from './LoadingOverlay';

let props = {};
describe('LoadingOverlay', () => {
  beforeEach(() => {
    props = {
      loading: true,
      fullSize: true,
      isModalOverlay: false,
    };
  });

  const renderComponent = () => render(<LoadingOverlay {...props} />);

  it('should render without crashing', () => {
    renderComponent();
  });
});
