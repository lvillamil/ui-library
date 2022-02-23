import React from 'react';
import { render } from '@testing-library/react';
import Arrow from './Arrow';

it('renders without crashing', () => {
  render(<Arrow position="up" />);
});

it('renders arrow up', () => {
  const { container } = render(<Arrow position="up" />);
  expect(container.querySelector('svg').textContent).toEqual(
    'keyboard_arrow_up.svg'
  );
});

it('renders arrow down', () => {
  const { container } = render(<Arrow position="down" />);
  expect(container.querySelector('svg').textContent).toEqual(
    'keyboard_arrow_down.svg'
  );
});

it('renders arrow left', () => {
  const { container } = render(<Arrow position="left" />);
  expect(container.querySelector('svg').textContent).toEqual(
    'keyboard_arrow_left.svg'
  );
});

it('renders arrow right', () => {
  const { container } = render(<Arrow position="right" />);
  expect(container.querySelector('svg').textContent).toEqual(
    'keyboard_arrow_right.svg'
  );
});

it('should return null if position prop hasnt a valid value', () => {
  const { container } = render(<Arrow position="notvalidposition" />);
  expect(container.firstChild).toBeNull();
});
