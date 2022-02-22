import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

const defaultProps = {
  children: <div />,
};

it('renders correctly', () => {
  render(<Card {...defaultProps} />);
});

it('renders title', () => {
  const title = <h1>Title</h1>;

  const { queryByText } = render(<Card {...defaultProps} title={title} />);

  expect(queryByText('Title')).toBeTruthy();
});

it('classNames are passed', () => {
  const myProps = {
    ...defaultProps,
    className: 'myClassName',
    titleClassName: 'myTitleClassName',
    contentClassName: 'myContentClassName',
  };

  const { container } = render(<Card {...myProps} />);

  expect(
    container.querySelector('.card').classList.contains(myProps.className)
  ).toBe(true);
  expect(
    container.querySelector('.title').classList.contains(myProps.titleClassName)
  ).toBe(true);
  expect(
    container
      .querySelector('.content')
      .classList.contains(myProps.contentClassName)
  ).toBe(true);
});
